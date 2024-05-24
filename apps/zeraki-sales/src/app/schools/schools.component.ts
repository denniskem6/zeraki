import { Component, inject, OnInit} from "@angular/core";
import {RouterModule} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ZerakiService } from '../services/zeraki.service';
import { tap } from "rxjs";
@Component ({
  standalone: true,
  imports:[RouterModule],
  templateUrl: 'schools.component.html',
})

export class SchoolsComponent{
  
schooldata:any[]=[];

constructor(private ZerakiService: ZerakiService){

}

HttpClient=inject(HttpClient);

ngOnInit() : void{
this.fetchSchoolData();
}

fetchSchoolData(){
  this.ZerakiService.schooldata().pipe(tap((res:any)=>{
    // console.log(res)
    this.schooldata = res
  })).subscribe()
}

}