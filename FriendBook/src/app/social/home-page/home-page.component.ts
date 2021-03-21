import { ChangeDetectorRef, Component, OnInit, SimpleChange } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/sharedServices/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public position = 'Software Development';
  public name = 'Hemant Shrivastava';
  public internalAccess = true;
  public following = 500;
  public followers = 2000;
  public activities = 90;
  public suggetions = [
    {
      name: 'Hemant Shrivatsva',
      position: 'Trainee SDE',
    },
    {
      name: 'Piyush Chandak',
      position: 'Full Stack SDE',
    },
    {
      name: 'Udit Jain',
      position: 'Trainee SDE',
    },
    {
      name: 'Gurpreet Chabbra',
      position: 'UI Developer',
    },
  ];
  public messages: any[] = [];
  public subscription: Subscription;

  constructor(private sharedService: SharedService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
console.log("HOMEPAGE KA ONINT")
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
