import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ChartEntry} from '../../models/chart';
import {ChartService} from '../../services/chart.service';
import {FilterService} from '../../services/filter.service';
import {Filter} from '../../models/filter';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit, OnDestroy {

  chartSubscription: Subscription;
  filterSubscription: Subscription;
  data: ChartEntry[];
  currentFilter: Filter;
  columns: string[];


  constructor(private chartService: ChartService, private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.filterSubscription = this.filterService.filterSubject.subscribe(res => {
      this.currentFilter = res;
      this.columns = res.visibleColumns;
      this.columnsFill();
      this.chartSubscription = this.chartService.getChartDetails(res.filename).subscribe(response => {
        this.data = response.entries;
      });
    });
  }

  columnsFill(): void {
    if (this.columns.length === 0) {
      this.columns = ['x', 'y1', 'y2', 'y3', 'y4', 'y5'];
    } else {
      this.columns = ['x', ...this.columns];
    }
  }


  ngOnDestroy(): void {
    this.chartSubscription.unsubscribe();
  }

}
