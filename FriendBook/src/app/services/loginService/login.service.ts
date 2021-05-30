import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { loginResponse } from 'src/app/interfaces/loginResponse.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public url = "http://localhost:5000";
  constructor(private http: HttpClient) { }
  tryLogin(userName, password) {

    let urls = `${this.url}/auth/login`;
    let body = { userName, password };
    return this.http.post<loginResponse>(urls, body, { observe: 'response' })
  }
}

