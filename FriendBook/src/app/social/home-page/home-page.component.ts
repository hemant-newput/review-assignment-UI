import { ChangeDetectorRef, Component, OnInit, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';
import { SharedService } from 'src/app/services/sharedServices/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public position;
  public name;
  public internalAccess = true;
  public following;
  public followers;
  public activities;
  public profileImage;
  public suggetions = [];
  public messages: any[] = [];
  public subscription: Subscription;
  public isLoading: boolean;
  public friendID: number;

  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef, private postService: PostService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const userID = localStorage.getItem('userID') || 1;
    this.postService.getUserData(userID).subscribe((postData) => {
      this.position = postData.data.position;
      this.name = postData.data.name;
      this.internalAccess = postData.data.internalAccess;
      this.following = postData.data.following;
      this.followers = postData.data.followers;
      this.activities = postData.data.activities;
      this.profileImage = postData.data.profileImage;
      this.friendID = postData.data.id;
      this.isLoading = false;
    })
  }

  ngAfterViewChecked() {
    this.cdr.detectChanges();
    this.sharedService.getMessage().subscribe((data) => {
      if (data) {
        this.messages.push(data);
        if (data.UserData) {
          this.name = data.UserData.name;
          this.position = data.UserData.occupation;
        }
        if (data.friendInfo) {
          this.followers = data.friendInfo.followers;
        }
      } else {
        this.messages = [];
      }
    })
  }

}
