import { Component, OnInit } from '@angular/core';
import { FriendListService } from 'src/app/services/friendListService/friend-list.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  constructor(private friendService:FriendListService) { }
  public friendList;
  ngOnInit(): void {
    document.title = 'Friends';
    this.friendList = this.friendService.getFriendList();
  }

  public Unfriend(friend)
  {
    friend.status = false;
    this.friendService.unfriend(friend);

  }
  public Addfriend(friend)
  {
    friend.status = true;
  }
}
