import { Component, OnInit, inject, signal } from "@angular/core";
import {RouterModule} from '@angular/router';
import { ZerakiService } from '../services/zeraki.service';
import { tap } from "rxjs";
import { CommonModule } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { fetch } from "@nx/angular";

@Component({
  standalone: true,
  imports:[RouterModule, CommonModule],
  templateUrl:'sales-agent.component.html',
})

export class salesAgentComponent implements OnInit{


constructor(private ZerakiService:ZerakiService){

}

HttpClient=inject(HttpClient);
data:any[]=[];
collections:any[]=[];

ngOnInit(): void {
  this.fetchData();
  this.fetchCollection()
}

    fetchData(){
      this.ZerakiService.bounced_cheques().subscribe((data:any)=>{
        // console.log(data);
        this.data=data;
      })
    }

    fetchCollection(){
      this.ZerakiService.collections().subscribe((collections:any)=>{
        this.collections = collections;
      })
    }



}

