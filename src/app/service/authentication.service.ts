import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Authentication } from "../model/authentication";




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://www.kriauto.ma/api/login';

  constructor(private http: HttpClient) { }

  login(authentication: Authentication) : Observable<any>{
    return this.http.post(`${this.baseUrl}`, authentication);
  }
}
