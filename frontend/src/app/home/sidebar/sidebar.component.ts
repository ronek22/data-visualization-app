import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterService} from '../../services/filter.service';
import {Subscription} from 'rxjs';
import {take} from 'rxjs/operators';
import {Filter} from '../../models/filter';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnDestroy {
  links = [{label: 'Strona A', value: 'A'}, {label: 'Strona B', value: 'B'}];
  activeLink = this.links[0];
  filterSubscription: Subscription;
  currentFilter: Filter;

  constructor(private filterService: FilterService) {
  }

  ngOnInit(): void {
    this.filterSubscription = this.filterService.filterSubject.pipe(take(1)).subscribe(res => {
      this.currentFilter = res;
    });
  }

  onClick(link: any): void {
    this.currentFilter.filename = link.value;
    this.filterService.sendFilterQuery(this.currentFilter);
    this.activeLink = link;
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }

}
