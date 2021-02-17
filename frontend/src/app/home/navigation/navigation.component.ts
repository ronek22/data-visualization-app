import {Component, OnDestroy, OnInit} from '@angular/core';
import {FilterService} from '../../services/filter.service';
import {take} from 'rxjs/operators';
import {Subscription} from 'rxjs';
import {Filter} from '../../models/filter';
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  links = [{label: 'Wykresy', value: true}, {label: 'Tabela', value: false}];
  activeLink = this.links[0];
  filterSubscription: Subscription;
  currentFilter: Filter;

  constructor(
    private router: Router,
    private filterService: FilterService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {

    this.filterSubscription = this.filterService.filterSubject.pipe(take(1)).subscribe(res => {
      this.currentFilter = res;
    });
  }

  onClick(link: any): void {
    this.currentFilter.showCharts = link.value;
    this.filterService.sendFilterQuery(this.currentFilter);
    this.activeLink = link;
  }

  ngOnDestroy(): void {
    this.filterSubscription.unsubscribe();
  }

  logout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }


}
