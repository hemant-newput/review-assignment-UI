import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FriendListService } from 'src/app/services/friendListService/friend-list.service';
import { PostService } from 'src/app/services/post.service';
import { SharedService } from 'src/app/services/sharedServices/shared.service';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
  @Input() public suggetions;
  constructor(private friendService: FriendListService, private router: Router, private sharedService: SharedService,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getFriendSuggestions();
  }
  getFriendSuggestions(): void {
    this.friendService.getFriendSuggestions().subscribe((suggetions) => {
      this.suggetions = suggetions.data;
    });
  }
  fetchFriendProfile(friend): void {
    console.log(friend);
    localStorage.setItem('userID', friend.id);
    location.reload();  // this is not the correct way of doing things
  }
  addFriend(friend) {
    this.friendService.addFriend(friend.id).subscribe(() => {
      friend.status = true;
      this.toastr.info('Friend Added');
    });
  }

  unFriend(friend) {
    this.friendService.unfriend(friend.id).subscribe(() => {
      friend.status = false;
      this.toastr.info('Friend Removed');
    });
  }
}
