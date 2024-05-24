import { Component, inject, OnInit} from "@angular/core";
import {RouterModule} from '@angular/router';
import { ZerakiService } from '../services/zeraki.service';
import { HttpClient } from '@angular/common/http';
import { tap } from "rxjs";

@Component ({
  standalone: true,
  imports:[RouterModule],
  templateUrl: 'upcoming-invoices.component.html',
})

export class UpcomingInvoicesComponent{

  invoicedata:any[]=[];

  constructor(private ZerakiService:ZerakiService){

  }
  HttpClient=inject(HttpClient);

ngOnInit(): void{
this.fetchInvoicedata();
}

fetchInvoicedata(){
  this.ZerakiService.invoicedata().pipe(tap((res:any)=>{
    console.log(res)
    this.invoicedata = res
  })).subscribe()
}

}