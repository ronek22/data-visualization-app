import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ChartEntry} from '../../../../models/chart';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit, OnChanges {

  @Input() data: ChartEntry[];
  @Input() col: string;
  results: {};
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = false;
  xAxisLabel = 'Country';
  showYAxisLabel = false;
  yAxisLabel = 'Sales';
  timeline = false;
  showLabels = true;



  toPieChart(): void {
    this.results = this.data?.map(item => ({
      name: item.x,
      value: item[this.col as keyof ChartEntry]
    })).filter(entry => entry.value !== null);
  }

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.toPieChart();
  }

}
