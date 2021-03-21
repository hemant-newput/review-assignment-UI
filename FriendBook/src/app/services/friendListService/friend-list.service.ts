import { Injectable } from '@angular/core';
import { SharedService } from '../sharedServices/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FriendListService {
  public data = [
    { name: 'Hemant Shrivastava', position: 'SDE', company: 'Google', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Piyush Chandak', position: 'SDE', company: 'Microsoft', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Udit Jain', position: 'SDE', company: 'Facebook', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Gurpreet Chabbra', position: 'SDE', company: 'Apple', image: '../../../../assets/profile-girl.png', status: true },
    { name: 'Awanish Tiwari', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Siya', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Anjana', position: 'SDE', company: 'Newput', image: '../../../../assets/profile-girl.png', status: true },
    { name: 'Alex taxeria', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Suman', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Rupak', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Hemant Shrivastava', position: 'SDE', company: 'Google', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Piyush Chandak', position: 'SDE', company: 'Microsoft', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Udit Jain', position: 'SDE', company: 'Facebook', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Gurpreet Chabbra', position: 'SDE', company: 'Apple', image: '../../../../assets/profile-girl.png', status: true },
    { name: 'Awanish Tiwari', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Siya', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Anjana', position: 'SDE', company: 'Newput', image: '../../../../assets/profile-girl.png', status: true },
    { name: 'Alex taxeria', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Suman', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
    { name: 'Rupak', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  ];
  
  constructor(private sharedService: SharedService) { }
  getFriendList() {
    this.data.sort((a,b) => {
      return (a.name > b.name) ? 1 : -1;
    });
    return this.data;
  }

  unfriend(friend) {
    console.log("Please unfriend : " + JSON.stringify(friend))
    this.data = this.data.filter((data) => {
      return data.name !== friend.name;
    })
    
  }


  addFriend(friend) {
    this.data.push(friend);
  }
}