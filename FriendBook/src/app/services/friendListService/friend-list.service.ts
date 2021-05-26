import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../sharedServices/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FriendListService {
  public backendUrl = "https://friendbook-backend.herokuapp.com";
  // public data = [
  //   { name: 'Hemant Shrivastava', position: 'SDE', company: 'Google', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Piyush Chandak', position: 'SDE', company: 'Microsoft', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Udit Jain', position: 'SDE', company: 'Facebook', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Gurpreet Chabbra', position: 'SDE', company: 'Apple', image: '../../../../assets/profile-girl.png', status: true },
  //   { name: 'Awanish Tiwari', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Siya', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Anjana', position: 'SDE', company: 'Newput', image: '../../../../assets/profile-girl.png', status: true },
  //   { name: 'Alex taxeria', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Suman', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Rupak', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Hemant Shrivastava', position: 'SDE', company: 'Google', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Piyush Chandak', position: 'SDE', company: 'Microsoft', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Udit Jain', position: 'SDE', company: 'Facebook', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Gurpreet Chabbra', position: 'SDE', company: 'Apple', image: '../../../../assets/profile-girl.png', status: true },
  //   { name: 'Awanish Tiwari', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Siya', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Anjana', position: 'SDE', company: 'Newput', image: '../../../../assets/profile-girl.png', status: true },
  //   { name: 'Alex taxeria', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Suman', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  //   { name: 'Rupak', position: 'SDE', company: 'Newput', image: '../../../../assets/profile.jpg', status: true },
  // ];

  constructor(private sharedService: SharedService, private http: HttpClient) { }
  // sortFriendList1() {
  //   this.data.sort((a, b) => {
  //     return (a.name > b.name) ? 1 : -1;
  //   });
  //   return this.data;
  // }
  sortFriendList(data) {
    data.sort((a, b) => {
      return (a.name > b.name) ? 1 : -1;
    });
    return data;
  }

  getFriendList(userID) {
    const url = `${this.backendUrl}/home/friends/list/${userID}`;
    return this.http.post<any>(url, { observe: 'response' });
  }
  unfriend(friend,data) {
    console.log('Please unfriend : ' + JSON.stringify(friend));
    const url = `${this.backendUrl}/home/friends/Unfriend/${friend.userID}`;
    return this.http.post<any>(url, { observe: 'response' });
  }
  addFriend(userID) {
    const url = `${this.backendUrl}/home/friends/addFriend/${userID}`;
    return this.http.post<any>(url, { observe: 'response' });
  }
  getFriendSuggestions(){
    const userID = localStorage.getItem('userID')
    const url = `${this.backendUrl}/home/friends/suggestions/${userID}`;
    return this.http.post<any>(url, { observe: 'response' });
  }
}
