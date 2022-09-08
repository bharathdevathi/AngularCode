import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    myusername: any = '';
    mypassword: any = '';
    userList = [{
        "userId": "venu",
        "password": "test"
    },
    {
        "userId": "bharath",
        "password": "test"
    },
    ];
    constructor(private router: Router, private appcomponent: AppComponent) {
        window.localStorage.clear();
    }

    ngOnInit(): void {
    }
    mylogin() {
        if(window.localStorage.getItem(this.myusername)!="undefined"){
            window.localStorage.removeItem(this.myusername);
        }
        
        for (let i = 0; i < this.userList.length; i++) {
            if (this.userList[i].userId === this.myusername && this.userList[i].password === this.mypassword) {
                this.appcomponent.loggedinuser = this.myusername;
               // document.cookie="nextaddnewitem=this.saveArray";
               window.localStorage.setItem(this.myusername,this.myusername);
                this.router.navigateByUrl('/Dashboard');
                return;
            }
        }
        alert('Please enter valid Username and Password');
    }
}