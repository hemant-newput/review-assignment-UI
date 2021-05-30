import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  public url = "http://localhost:5000";
  constructor(private http: HttpClient) { }
  signUp(body) {
    let url2 = `${this.url}/auth/signUp`;
    return this.http.post(url2, body, { observe: 'response' })
  }
}
