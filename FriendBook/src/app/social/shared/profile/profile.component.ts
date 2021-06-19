import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FriendListService } from 'src/app/services/friendListService/friend-list.service';
import { SharedService } from 'src/app/services/sharedServices/shared.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public position;
  @Input() public name;
  @Input() public internalAccess: boolean;
  @Input() public following;
  @Input() public followers;
  @Input() public activities;
  @Input() public profileImage;
  @Input() public isLoading;
  @Input() public friendID;
  messages: any[] = [];
  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef,
              private friendService: FriendListService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }
  addFriend(friendID): void {
    this.friendService.addFriend(friendID).subscribe((data) => {
      this.toastr.info(data.message);
      this.sharedService.speak(`You ${data.message}`);
      this.internalAccess = true;
    });
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges();
    this.sharedService.getMessage().subscribe((data) => {
      if (data) {
        this.messages.push(data);
        console.log(JSON.stringify(data));
        if (data.UserData) {
          this.name = data.UserData.name;
          this.position = data.UserData.occupation;
        }
      } else {
        this.messages = [];
      }
    });
  }

}
