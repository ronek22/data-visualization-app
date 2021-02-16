import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {ChartService} from '../services/chart.service';
import {Subscription} from 'rxjs';
import {ChartEntry} from '../models/chart';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }


}
