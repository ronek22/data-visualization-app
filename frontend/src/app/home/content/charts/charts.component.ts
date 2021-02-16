import {AfterViewInit, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {ChartEntry} from '../../../models/chart';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit, OnChanges {
  @Input() data: ChartEntry[];
  @Input() columns: string[];
  chartColumns: string[];

  constructor() {

  }

  ngOnInit(): void {
  }


  ngOnChanges(): void {
    this.chartColumns = this.columns.slice(1);
  }

}
