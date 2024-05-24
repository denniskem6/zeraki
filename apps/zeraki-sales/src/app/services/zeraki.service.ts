import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})

export class ZerakiService{

  constructor (private httpClient: HttpClient){

    

  }

  bounced_cheques(){
    return this.httpClient.get('http://localhost:3000/bounced_cheques')
  }

  collections(){
    return this.httpClient.get('http://localhost:3000/collections')
  }

  getChartInfo(){
    return this.httpClient.get('http://localhost:3000/ZAbarsignups')
  }

  ZFChartInfo(){
    return this.httpClient.get('http://localhost:3000/ZFbarsignups')
  }

  ZTChartInfo(){
    return this.httpClient.get('http://localhost:3000/ZTbarsignups')
  }

  getpieChartInfo(){
    return this.httpClient.get('http://localhost:3000/ZAtargetsVisualization')
  }

  ZFgetpieChartInfo(){
    return this.httpClient.get('http://localhost:3000/ZFtargetsVisualization')
  }

  ZTgetpieChartInfo(){
    return this.httpClient.get('http://localhost:3000/ZTtargetsVisualization')
  }

  schooldata(){
    return this.httpClient.get('http://localhost:3000/school')
  }

  invoicedata(){
    return this.httpClient.get('http://localhost:3000/invoices?_sort=due_date')
  }

}