import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Authentication } from "../model/authentication";
import { Observable } from 'rxjs';
import {Currentuser, CurrentUserAdapter} from "../model/currentuser";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  constructor(private http: HttpClient, private adapter: CurrentUserAdapter) { }

  private baseUrl = 'http://www.kriauto.ma/api/login';

  login(authentication: Authentication) : Observable<Currentuser>{
    return this.http.post(`${this.baseUrl}`, authentication).pipe(
      // Adapt each item in the raw data array
      //map((data: any) => data.map(item => this.adapter.adapt(item))),
      // Adapt item object
      map((data: any) => data.valueOf(item => this.adapter.adapt(item))),
    );
  }

  public addToken(token) {
    localStorage.setItem('token','Basic'+token);
  }

  public getToken() : string {
    return localStorage.getItem('token');
  }

  public deleteToken() {
    localStorage.removeItem('token');
  }


}
