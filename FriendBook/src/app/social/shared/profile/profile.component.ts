import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() public position;
  @Input() public name ;
  @Input() public internalAccess ;
  @Input() public following ;
  @Input() public followers ;
  @Input() public activities;
  constructor() { }

  ngOnInit(): void {
  }

}
