import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { ToastrService } from 'ngx-toastr';
import { FriendListService } from 'src/app/services/friendListService/friend-list.service';
import { SharedService } from 'src/app/services/sharedServices/shared.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  constructor(private friendService: FriendListService, private sharedService: SharedService, private toastr: ToastrService, private router: Router) { }
  public friendList;
  public followers = 0;
  public followings = 0;
  public isLoading: boolean;
  public internalAccess: boolean;
  ngOnInit(): void {
    document.title = 'Friends';
    this.isLoading = true;
    this.fetchFriendData();
    this.sharedService.sendMessage({ friendInfo: { followers: this.followers, followings: this.followings } });
  }

  public Unfriend(friend): void {
    friend.status = false;
    this.friendService.unfriend(friend.userID).subscribe((data) => {
      this.toastr.info(data.message);
      this.sharedService.speak(`You ${data.message}`)
    });
    this.followers -= 1;
    this.sharedService.sendMessage({ friendInfo: { followers: this.followers, followings: this.followings } });
  }
  public Addfriend(friend): void {
    friend.status = true;
    this.friendService.addFriend(friend.userID).subscribe((data) => {
      this.toastr.info(data.message);
      this.sharedService.speak(`You ${data.message}`)
    });
    this.followers += 1;
    this.sharedService.sendMessage({ friendInfo: { followers: this.followers, followings: this.followings } });
  }
  public fetchFriendData(): void {
    this.friendService.getFriendList(localStorage.getItem('userID')).subscribe((response) => {
      this.internalAccess = response.internalAccess;
      this.friendList = response.data;
      this.followers = response.data.length;
      this.friendList = this.friendService.sortFriendList(this.friendList);
      this.sharedService.sendMessage({ friendInfo: { followers: this.followers, followings: this.followings } });
      this.isLoading = false;
    });
  }
  public speakAbout(friend) {
    this.sharedService.speak(`${friend.name} is a ${friend.position} at ${friend.company}`)
  }
  public swapProfile(friend) {
    localStorage.setItem('userID', friend.userID);
    this.router.navigate(['/home/posts']);
    location.reload();
  }
}