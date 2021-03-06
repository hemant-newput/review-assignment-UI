import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  constructor() {}
  
  getUserData() {
    const UserData = {
      name: 'Hemant Kumar Shrivastava',
      gender: 'Male',
      dob: '6 Sep 1998',
      married: 'Unmarried',
      location: 'Ayodhya',
      occupation: 'Software Developer',
      skills: 'Javascript',
      job: 'Newput InfoTech',
    };

    return of(UserData);
  }
  updateBasicDetails(data) {
    alert('Hii i am from service : ' + JSON.stringify(data));
  }
  updateWorkDetails(data) {
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
