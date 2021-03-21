import { Component, OnInit } from '@angular/core';
import { FriendListService } from 'src/app/services/friendListService/friend-list.service';
import { SharedService } from 'src/app/services/sharedServices/shared.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  constructor(private friendService: FriendListService, private sharedService: SharedService) { }
  public friendList;
  public followers;
  public followings = 0;
  ngOnInit(): void {
    document.title = 'Friends';
    this.friendList = this.friendService.getFriendList();
    this.followers = this.friendList.length;
    this.sharedService.sendMessage({ friendInfo: { followers: this.followers , followings: this.followings } });
  }

  public Unfriend(friend): void {
    friend.status = false;
    this.friendService.unfriend(friend);
    this.followers -= 1;
    this.sharedService.sendMessage({ friendInfo: { followers: this.followers , followings: this.followings } });
  }
  public Addfriend(friend): void {
    friend.status = true;
    this.friendService.addFriend(friend);
    this.followers += 1;
    this.sharedService.sendMessage({ friendInfo: { followers: this.followers , followings: this.followings } });
  }
}
