import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RequestDataService} from 'src/app/Requestdata.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeadercontrolComponent } from './headercontrol/headercontrol.component';
import { HelpComponent } from './help/help.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    HeadercontrolComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [RequestDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
