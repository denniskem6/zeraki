import { Component, OnInit} from "@angular/core";
import { RouterModule } from "@angular/router";
import {Chart, registerables} from 'node_modules/chart.js';
import { ZerakiService } from '../services/zeraki.service';
Chart.register(...registerables);


@Component ({
  standalone: true,
  imports:[RouterModule],
  templateUrl: 'signup-overview.component.html',
})

export class SignupOverviewComponent{

chartdata:any;

labeldata:any[]=[];
signupdata:any[]=[];

ZFchartdata:any;

ZFlabeldata:any[]=[];
ZFsignupdata:any[]=[];

ZTchartdata:any;

ZTlabeldata:any[]=[];
ZTsignupdata:any[]=[];

  constructor(private ZerakiService: ZerakiService){

  }

  ngOnInit(): void{
    this.ZerakiService.getChartInfo().subscribe(result=>{
      this.chartdata=result;
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length; i++){
          // console.log(this.chartdata[i])
          this.labeldata.push(this.chartdata[i].SchoolType);
          this.signupdata.push(this.chartdata[i].signups)
        }
      }
      this.renderGraph(this.labeldata, this.signupdata, 'bargraph');
    });

 

    this.ZerakiService.ZFChartInfo().subscribe(result=>{
      this.ZFchartdata=result;
      if(this.ZFchartdata!=null){
        for(let i=0; i<this.ZFchartdata.length; i++){
          // console.log(this.chartdata[i])
          this.ZFlabeldata.push(this.ZFchartdata[i].SchoolType);
          this.ZFsignupdata.push(this.ZFchartdata[i].signups)
        }
      }
      this.renderGraph(this.ZFlabeldata, this.ZFsignupdata, 'bargraph2');
    });

    this.ZerakiService.ZTChartInfo().subscribe(result=>{
      this.ZTchartdata=result;
      if(this.ZTchartdata!=null){
        for(let i=0; i<this.ZTchartdata.length; i++){
          // console.log(this.chartdata[i])
          this.ZTlabeldata.push(this.ZTchartdata[i].SchoolType);
          this.ZTsignupdata.push(this.ZTchartdata[i].signups)
        }
      }
      this.renderGraph(this.ZTlabeldata, this.ZTsignupdata, 'bargraph3');
    });


  }

  renderGraph(labeldata:any, signupdata:any, id:any){
    const ctx = document.getElementById('myChart');

    new Chart(id, {
      type: 'bar',
      data: {
        labels: labeldata,
        datasets: [{
          label: 'Number of signups',
          data: signupdata,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}