import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginPayload } from './auth/login.payload';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from 'ngx-webstorage';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl = "http://127.0.0.1:8000/";

  constructor(private httpClient: HttpClient, private localStorageService: LocalStorageService) { }

  login(loginPayload: LoginPayload): Observable<boolean> {
    let headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(this.baseUrl + 'user/login', loginPayload, { headers: headers }).pipe(map(data => {
      this.localStorageService.store('loginData', data);
      return true;
    }));
  }
}