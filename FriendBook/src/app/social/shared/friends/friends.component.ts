import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }
  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/watcher.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
