import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendUrl } from '../../../assets/config/config';
@Injectable({
  providedIn: 'root'
})
export class SignUpService {
  public url = "https://friendbook-backend.herokuapp.com";
  constructor(private http: HttpClient) { }
  signUp(body) {
    let url2 = `${this.url}/auth/signUp`;
    return this.http.post(url2, body, { observe: 'response' })
  }
}
