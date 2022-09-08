import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { map } from 'rxjs';
import {RequestDataService} from 'src/app/Requestdata.service';
import { AppComponent} from '../app.component';
//var Charts = require('chart.js');
@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedinuser: any;
   requestdata:Array<RequestData>=[];
piechart:Array<piemodel>=[];
  constructor(private appcomponent: AppComponent,private dataservice:RequestDataService) { 
    this.loggedinuser = this.appcomponent.loggedinuser;
  }
  public pieChartType:string = 'pie';

  ngOnInit(): void {
    debugger;
    var _this=this;
    this.dataservice.getRequestData().subscribe({ next: (res) => { console.log(res);_this.requestdata=res }, error: (e) => console.error(e) });
  }

testresult(){
  console.log(this.requestdata);
  if(this.requestdata!=undefined&&this.requestdata.length>0){
    let presult=['New','Pending','Closed'];
    this.piechart=[];
presult.map((x,i)=>{

  let result= new piemodel()
result.status=x
result.count=this.requestdata.filter(y=>y.status==x).length
this.piechart.push(result);
return '';
}
);   
 console.log(this.piechart);
}
}
}

export class RequestData{
 "incident": string;
  "incidentDetails": string;
  "rootCause":string;
  
  "solution": string;
  "raisedBy": string;
  "raisedDate":string;
  
  "assingedTo": string;
  "assignedDate": string;
  
  "closedDate": string;
  "closedBy": string;
  "status":string;
  } 
  export class piemodel{
    "count":number;
    "status":string;
  }