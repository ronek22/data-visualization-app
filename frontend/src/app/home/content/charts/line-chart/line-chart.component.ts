import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {ChartEntry} from "../../../../models/chart";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() data: ChartEntry[];
  @Input() col: string;
  results: {};

  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  timeline = false;
  showLabels = true;



  toLineChart(): void {
    const prepare = this.data?.map(item => ({
      name: item.x,
      value: item[this.col as keyof ChartEntry]
    })).filter(entry => entry.value !== null);


    this.results = [{
      name: 'Wykres liniowy',
      series: prepare
    }];

  }

  constructor() {

  }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    this.toLineChart();
  }

}
