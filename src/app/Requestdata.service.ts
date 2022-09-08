import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestDataService {

 constructor(private httpService: HttpClient) { }

 getRequestData():Observable<any> {
     var dataresult=this.httpService.get('../../assets/test.json');
   return dataresult;
 }

}