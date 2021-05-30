import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/watcher.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
