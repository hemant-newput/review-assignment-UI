import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SharedService } from '../sharedServices/shared.service';

@Injectable({
  providedIn: 'root'
})
export class FriendListService {
  public backendUrl = "https://friendbook-backend.herokuapp.com";

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
  unfriend(userID) {
    const url = `${this.backendUrl}/home/friends/Unfriend/${userID}`;
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
