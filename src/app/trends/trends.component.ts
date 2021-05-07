import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';
import { VacanciesService } from '../vacancies.service';
import { AccoliteDetailsService } from '../accolite-detail.service';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {

  constructor(private accoliteservice: AccoliteDetailsService) { }

  ngOnInit(): void {

    this.accoliteservice.getcountPerLocation().subscribe(data => {
      this.setBarGraphValues(data);
      console.log(data);
    })
  
  }

  // Bar-chart-Location-wise Joining
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Number of hired Oboardee',

        },
        ticks: {
          beginAtZero: true,
          stepSize: 0.5
        }
      }],
      xAxes:[{
        scaleLabel: {
          display: true,
          labelString: 'Assigned Location',
        },
      }]
    }
  };



  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] =
    [{
      data: [],
      backgroundColor: ['rgba(66, 183, 245,0.8)', 'rgba(66, 183, 245,0.8)', 'rgba(66, 183, 245,0.8)'],
      label: 'Hired Onboardees'
    }];


  setBarGraphValues(data: any) {
    for (const i in data) {
      console.log(data[i].location);
      console.log(data[i].oid );
      this.barChartLabels.push(data[i].location);
      this.barChartData[0].data!.push(data[i].oid);
    }
  }

  /*
  //Pie chart 1 --Location


  slChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
    },
  };


  slChartLabels: Label[] = [];
  //slChartData: number[]=[];
  slChartType: ChartType = 'pie';     //'pie';
  slChartLegend = true;

  slChartData: ChartDataSets[] =
    [{
      data: [],
      backgroundColor: ['rgb(55,99,132)', 'rgb(54,162,235)', 'rgb(255,205,86)'],
    }];

  setSelectedChartValues(data: any) {
    for (const i in data) {
      console.log(data[i].location);
      console.log(data[i].id);
      this.slChartLabels.push(data[i].location);
      this.slChartData[0].data!.push(data[i].id);
    }
    // this.slChartLabels = Object.keys(data);
    // this.slChartData = Object.values(data);
  }



  //Pie chart 2 --Technology


  techChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
    },
  };


  techChartLabels: Label[] = [];
  //slChartData: number[]=[];
  techChartType: ChartType = 'doughnut';     //'pie';
  techChartLegend = true;

  techChartData: ChartDataSets[] =
    [{
      data: [],
      backgroundColor: ['rgb(55,99,132)', 'rgb(54,162,235)', 'rgb(255,205,86)'],
    }];

  setTechnologyChartValues(data: any) {
    for (const i in data) {
      console.log(data[i].technology);
      console.log(data[i].id);
      this.techChartLabels.push(data[i].technology);
      this.techChartData[0].data!.push(data[i].id);
    }
    // this.slChartLabels = Object.keys(data);
    // this.slChartData = Object.values(data);
  }


  //Pie chart 3 --Course


  courseChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'right',
    },
    tooltips: {
      enabled: true,
      mode: 'single',
    },
  };


  courseChartLabels: Label[] = [];
  //slChartData: number[]=[];
  courseChartType: ChartType = 'polarArea';     //'pie';
  courseChartLegend = true;

  courseChartData: ChartDataSets[] =
    [{
      data: [],
      backgroundColor: ['rgb(55,99,132)', 'rgb(54,162,235)', 'rgb(255,205,86)'],
    }];

  setCourseChartValues(data: any) {
    for (const i in data) {
      console.log(data[i].course);
      console.log(data[i].id);
      this.courseChartLabels.push(data[i].course);
      this.courseChartData[0].data!.push(data[i].id);
    }
    // this.slChartLabels = Object.keys(data);
    // this.slChartData = Object.values(data);
  }*/
}
