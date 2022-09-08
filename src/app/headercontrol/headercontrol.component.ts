import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-headercontrol',
  templateUrl: './headercontrol.component.html',
  styleUrls: ['./headercontrol.component.css']
})
export class HeadercontrolComponent implements OnInit {
  loggedinuser:any;
  constructor(private appcomponent:AppComponent,private _Activatedroute: ActivatedRoute, private router: Router) { 
    debugger;
    if(this.appcomponent.loggedinuser!=undefined && this.appcomponent.loggedinuser!=""&&this.appcomponent.loggedinuser!="dnadevops"){
    this.loggedinuser= this.appcomponent.loggedinuser;
    }
    else if(this.mylogin()==true){
      this.loggedinuser=this.appcomponent.loggedinuser;
    } 
       else{
      this.logout();
    }
  }
logout(){
  //this.appcomponent.loggedinuser="";
  this.router.navigateByUrl('/login');

}
dashboard(){
  
  this.router.navigateByUrl('/Dashboard');
}
help(){
  
  this.router.navigateByUrl('/Help');
}
  ngOnInit(): void {
  }
  mylogin() {
    for (let i = 0; i < this.userList.length; i++) {
        if (window.localStorage.getItem(this.userList[i].userId)!=undefined&&window.localStorage.getItem(this.userList[i].userId)==this.userList[i].userId) {
            this.appcomponent.loggedinuser = this.userList[i].userId;
           
            return true;
        }
    }
    return false;
}
userList = [{

  "userId": "venu",
  "password": "test",
  "Role":"admin"
},
{
  "userId": "bharath",
  "password": "test",
  "Role":"engineer"
},
{
  "userId": "venkat",
  "password": "test",
  "Role":"customer"
}
];

}
