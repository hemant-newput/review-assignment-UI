import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/sharedServices/shared.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public position;
  @Input() public name;
  @Input() public internalAccess;
  @Input() public following;
  @Input() public followers;
  @Input() public activities;
  messages: any[] = [];
  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {

  }

  // ngAfterViewChecked() {
  //   this.cdr.detectChanges();
  //   this.sharedService.getMessage().subscribe((data) => {
  //     if (data) {
  //       this.messages.push(data);
  //       console.log(JSON.stringify(data));
  //       if (data.UserData) {
  //         this.name = data.UserData.name;
  //         this.position = data.UserData.occupation;
  //       }
  //       // if (data.friendInfo)
  //       // {
  //       //   this.followers = data.friendInfo.followers;
  //       // }

  //     } else {
  //       this.messages = [];
  //     }
  //   })
  // }

}
