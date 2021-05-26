import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/sharedServices/shared.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  @Input() public name;
  public messages: [];
  constructor(private cdr: ChangeDetectorRef, private sharedService: SharedService, private router: Router) { }
  ngOnInit(): void {
  }

  logout() {
    this.sharedService.speak("See You Soon")
    localStorage.clear();
  }
  ngAfterViewChecked() {
    this.cdr.detectChanges();
    const decodedToken: any = this.sharedService.getDecodedToken();
    this.name = decodedToken.name;
    this.messages = [];
    this.sharedService.getMessage().subscribe((data) => {
      if (data && data.userData) {
        console.log(JSON.stringify(data));
        this.name = data.name || data.UserData.name;

      } else {
        const decodedToken: any = this.sharedService.getDecodedToken();
        this.name = decodedToken.name;
        this.messages = [];
      }
    });
  }
  goToHome() {
    const decodedToken: any = this.sharedService.getDecodedToken();
    localStorage.setItem('userID', decodedToken.id);
    this.router.navigate(['/home']);
    location.reload();
  }
  toggleTalkback() {
    const talkback = localStorage.getItem('talkback');
    if (!talkback) {
      localStorage.setItem('talkback', "true")
      this.sharedService.speak("Talkback is on")
    }
    else {
      localStorage.setItem('talkback', "")
    }
  }
}
