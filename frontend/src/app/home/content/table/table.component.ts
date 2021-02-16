import {AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, ViewChild} from '@angular/core';
import {ChartEntry} from '../../../models/chart';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnChanges {

  @Input() data: ChartEntry[];
  @Input() columns: string[];
  dataSource: MatTableDataSource<ChartEntry>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor() {
  }


  ngOnChanges(): void {

    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;


  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

}
