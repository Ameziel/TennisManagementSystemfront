import {Component, OnInit} from '@angular/core';
import {EChartsOption} from "echarts";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{
  options: EChartsOption = {};
  constructor() {}

  ngOnInit(): void {
    this.options = {
      title : {
        text: "Évolutions et répartitions des élèves par âge",
        show: true,
      },
      legend: {},
      tooltip: {
        trigger: 'axis',
        showContent: false
      },
      dataset: {
        source: [
          ['Eleves actuellement inscritse', '2012', '2013', '2014', '2015', '2016', '2017'],
          ['30ans et +', 56.5, 82.1, 88.7, 70.1, 53.4, 90.1],
          ['50ans et +', 51.1, 51.4, 55.1, 53.3, 73.8, 68.7],
          ['[15;20]ans', 40.1, 62.2, 69.5, 36.4, 45.2, 32.5],
          ['Moins de 15 ans', 25.2, 37.1, 41.2, 18, 33.9, 49.1]
        ]
      },
      xAxis: { type: 'category' },
      yAxis: { gridIndex: 0 },
      grid: { top: '55%' },
      series: [
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'line',
          smooth: true,
          seriesLayoutBy: 'row',
          emphasis: { focus: 'series' }
        },
        {
          type: 'pie',
          id: 'pie',
          radius: '30%',
          center: ['50%', '25%'],
          emphasis: {
            focus: 'self'
          },
          label: {
            formatter: '{b}: {@2012} ({d}%)'
          },
          encode: {
            itemName: 'product',
            value: '2012',
            tooltip: '2012'
          }
        }
      ]
    };


  }
}


