import { Component, OnInit} from "@angular/core";
import {RouterModule} from '@angular/router';
import {Chart, registerables} from 'node_modules/chart.js';
import { ZerakiService } from '../services/zeraki.service';
Chart.register(...registerables);

@Component ({
  standalone: true,
  imports:[RouterModule],
  templateUrl: 'target-visualization.component.html',
})

export class TargetVisualizationComponent{

chartdata:any;
labeldata:any[]=[];
graphdata:any[]=[];

ZFchartdata:any;
ZFlabeldata:any[]=[];
ZFgraphdata:any[]=[];

ZTchartdata:any;
ZTlabeldata:any[]=[];
ZTgraphdata:any[]=[];

  constructor(private ZerakiService: ZerakiService){

  }

  ngOnInit(): void{
    this.ZerakiService.getpieChartInfo().subscribe(result=>{
      this.chartdata=result;
      if(this.chartdata!=null){
        for(let i=0; i<this.chartdata.length; i++){
          // console.log(this.chartdata[i])
          this.labeldata.push(this.chartdata[i].target);
          this.graphdata.push(this.chartdata[i].total)
        }
      }
      this.renderChart(this.labeldata, this.graphdata, 'piechart');
    });

    this.ZerakiService.ZFgetpieChartInfo().subscribe(result=>{
      this.ZFchartdata=result;
      if(this.ZFchartdata!=null){
        for(let i=0; i<this.ZFchartdata.length; i++){
          // console.log(this.chartdata[i])
          this.ZFlabeldata.push(this.ZFchartdata[i].target);
          this.ZFgraphdata.push(this.ZFchartdata[i].total)
        }
      }
      this.renderChart(this.ZFlabeldata, this.ZFgraphdata, 'piechart2');
    });

    this.ZerakiService.ZTgetpieChartInfo().subscribe(result=>{
      this.ZTchartdata=result;
      if(this.ZTchartdata!=null){
        for(let i=0; i<this.ZTchartdata.length; i++){
          // console.log(this.chartdata[i])
          this.ZTlabeldata.push(this.ZTchartdata[i].target);
          this.ZTgraphdata.push(this.ZTchartdata[i].total)
        }
      }
      this.renderChart(this.ZTlabeldata, this.ZTgraphdata, 'piechart3');
    });
  }


  renderChart(labeldata:any, graphdata:any, id:any){
    const ctx = document.getElementById('myChart');

    new Chart(id, {
      type: 'pie',
      data: {
        labels: labeldata,
        datasets: [{
          label: '',
          data: graphdata,
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