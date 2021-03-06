import { Component, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public position = 'Software Development'
  public name = 'Hemant Shrivastava'
  public internalAccess = true;
  public following = 500
  public followers = 2000
  public activities = 90
  public suggetions = [
    {
      name: 'Hemant Shrivatsva',
      position: 'Trainee SDE'
    },
    {
      name: 'Piyush Chandak',
      position: 'Full Stack SDE'
    },
    {
      name: 'Udit Jain',
      position: 'Trainee SDE'
    },
    {
      name: 'Gurpreet Chabbra',
      position: 'UI Developer'
    },
  ];
  public pageName = 'Profile Social'
  constructor() {
   }

  ngOnInit(): void {
    this.pageName = ("Profile Social"+ window.location.href.replace(window.location.origin,'')).split('/').join('>>')
  }
}
