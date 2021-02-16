import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {FilterService} from '../../services/filter.service';
import {Subscription} from 'rxjs';
import {Filter} from '../../models/filter';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  chartColumns: string[] = ['y1', 'y2', 'y3', 'y4', 'y5'];
  filterForm: FormGroup;
  filterSubscription: Subscription;
  currentFilter: Filter;

  constructor(private filterService: FilterService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.filterSubscription = this.filterService.filterSubject.pipe(take(1)).subscribe(res => {
      this.currentFilter = res;
    });

    this.filterForm = this.fb.group({
      columns: []
    });
  }

  onFilter(): void {
    if (this.filterForm.valid) {
      this.currentFilter.visibleColumns = this.filterForm.get('columns')?.value;
      this.filterService.sendFilterQuery(this.currentFilter);
    }
  }

  resetFilter(): void {
    this.filterForm.controls['columns'].setValue([]);
    this.onFilter();
  }

}
