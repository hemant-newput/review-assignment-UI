import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  tryLogin(username,password)
  {

    let url = "http://localhost:8000";
    let body = {username,password};


    // return this.http.post(url, body, { observe: 'response' })
    // .pipe(
    //   catchError((err: HttpErrorResponse) => {
    //     return observableThrowError(err);
    //   })
    // );
    return true;
  }

}
