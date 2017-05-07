import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user';


@Injectable()
export class UserService {

  private headers: Headers;

  // cache data
  public lastGetAll: Array<any>;
  public lastGet: any;

  //public urlApi:string = 'http://localhost:8081/api';
  public urlApi:string = 'http://localhost/verta';


  constructor(private http: Http) {

      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Accept', 'application/json');
  }

  private getActionUrl() {
    return this.urlApi;
//    return this.urlApi + '/user';
  }

  private getTokenLogin() {
    return 'token='+
           'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjEsImlzcyI6Imh0dHA6XC9cLzE5Mi4xNjguMzMuMTNcL2FwaVwvYXV0aGVudGljYXRlIiwiaWF0IjoxNDkzOTEyNzc2LCJleHAiOjE0OTM5MTYzNzYsIm5iZiI6MTQ5MzkxMjc3NiwianRpIjoiSnRmNFlwSUVwYWNPazl1UiJ9.YYhE0OVe_8BVm1D_TUONKs2Sz0NW2V2a2-oR6KMUczo'
           ;
  }
  // REST functions
  public getAll(): Observable<any[]> {
      return this.http.get(this.getActionUrl() +'?'+ this.getTokenLogin() )
          .map((response: Response) => {
            let data = response.json();
            this.lastGetAll = data;
            return data;
          })
          .catch(this.handleError)
          ;
  }

  public get(id: number): Observable<any> {
      return this.http.get(this.getActionUrl() + id + '?' + this.getTokenLogin() )
          .map((response: Response) => {
            let data = response.json();
            this.lastGet = data;
            return data;
          })
          .catch(this.handleError)
          ;
  }


  private handleError(error: Response) {
      console.error(error);
      return Observable.throw(error.json().error || 'Server error');
  }
}
