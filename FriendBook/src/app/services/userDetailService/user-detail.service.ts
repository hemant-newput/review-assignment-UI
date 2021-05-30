import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SharedService } from '../sharedServices/shared.service';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  constructor(private sharedService: SharedService, private http: HttpClient) { }
  public backendUrl = "http://localhost:5000"
  public UserData   = {
    name: 'Hemant Shrivastava',
    gender: 'Male',
    dob: '6 Sep 1998',
    married: 'Unmarried',
    location: 'Ayodhya',
    occupation: 'Software Developer',
    skills: 'Javascript',
    jobCompany: 'Newput InfoTech',
  };
  getUserData(userID) {
    const url = `${this.backendUrl}/home/${userID}/userData`;
    return this.http.post<any>(url, { observe: 'response' });
  }
  updateBasicDetails(data) {
    this.UserData.name = data.name;
    this.sharedService.sendMessage({ UserData: this.UserData });
    const url = '${this.backendUrl}/home/user/update';
    data.type = 'basic';
    return this.http.post<any>(url, data, { observe: 'response' });
  }
  updateWorkDetails(data) {
    this.UserData.occupation = data.occupation;
    this.sharedService.sendMessage({ UserData: this.UserData });
    data.type = 'work';
    const url = '${this.backendUrl}/home/user/update';
    return this.http.post<any>(url, data, { observe: 'response' });
  }

  getUserPhotos(userID) {
    const url = `${this.backendUrl}/home/user/photos?userID=${userID}`;
    return this.http.post(url, {});
  }
}
