import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Filter} from '../models/filter';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  initValue: Filter = {
    filename: 'A',
    showCharts: true,
    visibleColumns: []
  };

  filterSubject = new BehaviorSubject<Filter>(this.initValue);

  sendFilterQuery(value: Filter): void {
    this.filterSubject.next(value);
  }
  

  constructor() {
  }
}
