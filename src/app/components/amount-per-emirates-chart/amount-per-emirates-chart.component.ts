import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import {ServicesService} from '../../services/services.service';


@Component({
  selector: 'app-amount-per-emirates-chart',
  templateUrl: './amount-per-emirates-chart.component.html',
  styleUrls: ['./amount-per-emirates-chart.component.scss']
})
export class AmountPerEmiratesChartComponent implements OnInit {
  ref$: Observeable<Highcharts.ChartObject>;
  constructor(private servicesService:ServicesService) { }
  feedbackCount1:number;
  feedbackCount2:number;
  feedbackCount3:number;

  chart = new Chart({
    chart: {
      type: 'column'
    },
    title: {
      text:null
  },
  xAxis: {
      categories: ['AUH', 'AJM', 'SHJ', 'DXB', 'FUJ', 'RAK', 'UAQ']
  },
  yAxis: {
      min: 0,
      title: {
          text: null
      },
      max:150
  },
  tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
      shared: true
  },
  plotOptions: {
      column: {
          stacking: 'percent'
      }
  },
  series: [<Highcharts.SeriesColumnOptions>{
      name: 'John',
      data: [5, 3, 4, 7, 2,5,3],
      color: '#8CC3A9'
  },<Highcharts.SeriesColumnOptions> {
      name: 'Jane',
      data: [2, 2, 3, 2, 1,8,1],
      color: '#EFCE6F'
  },<Highcharts.SeriesColumnOptions> {
      name: 'Joe',
      data: [3, 4, 4, 2, 5,3,6],
      color: '#E05555'
  }]
  });



  ngOnInit() {
    // console.log(this.ref);
    this.happeniss(1, 1, '01/01/2019', '01/04/2019');
  }
  happeniss(language,channel,fromDate,toDate) {
    this.servicesService.happeniss(language,channel,fromDate,toDate).subscribe(
      (res:any) => {
        console.log(res);
        this.chart.removeSeries(0);
        this.chart.removeSeries(0);
        this.chart.removeSeries(0);
        const series1: Highcharts.SeriesColumnOptions = {
          type: 'column',
          name: 'John',
          data: [res.happinessIndicatorsList[0].feedbackCount, 3, 4, 7, 2, 5, 3],
          color: '#8CC3A9'
        };
        const series2: Highcharts.SeriesColumnOptions = {
          type: 'column',
          name: 'Jane',
          data: [res.happinessIndicatorsList[1].feedbackCount, 2, 3, 2, 1, 8, 1],
          color: '#EFCE6F'
        };
        const series3: Highcharts.SeriesColumnOptions = {
          type: 'column',
          name: 'Joe',
          data: [res.happinessIndicatorsList[2].feedbackCount, 4, 4, 2, 5, 3, 6],
          color: '#E05555'
        };
        this.chart.addSeries(series1, false, false);
        this.chart.addSeries(series2, false, false);
        this.chart.addSeries(series3, true, false);

        this.feedbackCount1 = res.happinessIndicatorsList[0].feedbackCount;
        this.feedbackCount2 = res.happinessIndicatorsList[1].feedbackCount;
        this.feedbackCount3 = res.happinessIndicatorsList[2].feedbackCount;
      },
      (err: Response) =>{
        console.log(err);
      }
    )
  };

}
