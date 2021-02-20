import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow',
  templateUrl: './follow.component.html',
  styleUrls: ['./follow.component.scss']
})
export class FollowComponent implements OnInit {
  @Input() public suggetions;
  constructor() { }

  ngOnInit(): void {
  }

}
