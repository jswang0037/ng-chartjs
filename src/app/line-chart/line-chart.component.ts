import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements AfterViewInit{
  @ViewChild(BaseChartDirective) chart!: BaseChartDirective;

  chartOptions: ChartOptions = {
    responsive: true,
  };
  chartType: ChartType = 'line';
  chartLegend = true;
  data1: number[] = [];
  data2: number[] = [];
  i=0;
  limit = 10;

  chartLabels: string[] = [];
  chartData = [
    {data: this.data1, label: 'line', cubicInterpolationMode: 'monotone'},
    {data: this.data2, label: 'monotone', cubicInterpolationMode: 'monotone'}
  ];

  addData(){
    this.i+=1;
    this.chartLabels.push(this.i.toString());
    if(this.data1.length>this.limit){
      this.data1.shift();
      this.data2.shift();
      this.chartLabels.shift();
    }
    this.data1.push(Math.random());
    this.data2.push(Math.random());
    this.chart.update();
  }

  ngAfterViewInit(): void {
    setInterval(() => {
      this.addData()
    }, 1000);
  }

}
