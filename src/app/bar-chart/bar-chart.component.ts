import { ChartType } from 'chart.js';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  chartOptions = {
    responsive: true
  };
  chartType: ChartType = 'bar';
  chartLegend = true;

  chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  chartData = [
    {data: [65, 59, 80, 81, 56, 55, 400], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

}
