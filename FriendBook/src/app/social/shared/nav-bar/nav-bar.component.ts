import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/sharedServices/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {
  @Input() public name ;
  constructor() { }
  ngOnInit(): void {
  }
  
  // ngAfterViewChecked() {
  //   this.cdr.detectChanges();
  //   this.sharedService.getMessage().subscribe((data) => {
  //     if (data) {
  //       this.messages.push(data);
  //       console.log(JSON.stringify(data));
  //       this.name = data.name;

  //     } else {
  //       this.messages = [];
  //     }
  //   })
  // }
}
