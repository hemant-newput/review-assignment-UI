import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { SharedService } from '../sharedServices/shared.service';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  constructor(private sharedService: SharedService) { }
  public UserData = {
    name: 'Hemant Shrivastava',
    gender: 'Male',
    dob: '6 Sep 1998',
    married: 'Unmarried',
    location: 'Ayodhya',
    occupation: 'Software Developer',
    skills: 'Javascript',
    job: 'Newput InfoTech',
  };
  getUserData() {

    this.sharedService.sendMessage(this.UserData);
    return of(this.UserData);
  }
  updateBasicDetails(data) {
    this.UserData.name = data.name;
    this.sharedService.sendMessage({UserData: this.UserData});
    alert('Hii i am from service : ' + JSON.stringify(data));
  }
  updateWorkDetails(data) {
    this.UserData.occupation = data.occupation;
    this.sharedService.sendMessage({UserData: this.UserData});
    alert('Hii i am from service : ' + JSON.stringify(data));
  }

  getUserPhotos() {
    return [
      {
        value: '../../../../assets/photo1.jpg',
      },
      {
        value: '../../../../assets/photo2.jpg',
      },
      {
        value: '../../../../assets/photo3.jpg',
      },
      {
        value: '../../../../assets/photo4.jpg',
      },
    ];
  }
}
