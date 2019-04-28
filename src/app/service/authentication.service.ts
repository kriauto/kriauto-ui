import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl = 'http://www.kriauto.ma/api/login';

  constructor(private http: HttpClient) { }

  login(profile: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, profile);
  }
}
