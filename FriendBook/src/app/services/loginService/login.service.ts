import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url = "https://friendbook-backend.herokuapp.com";
  constructor(private http: HttpClient) { }
  tryLogin(userName, password) {

    let urls = `${this.url}/auth/login`;
    let body = { userName, password };
    return this.http.post<any>(urls, body, { observe: 'response' })
  }
  resetPassword(userName){
    let urls = `${this.url}/auth/forget`;
    let body = { userName };
    return this.http.post<any>(urls, body, { observe: 'response' })
  }
}

