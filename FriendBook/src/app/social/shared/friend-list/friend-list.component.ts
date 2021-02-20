import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {

  constructor() { }
  public friendList= [
    {name:'Hemant Shrivastava',position:'SDE',company:'Google',image:'../../../../assets/profile.jpg'},
    {name:'Piyush Chandak',position:'SDE',company:'Microsoft',image:'../../../../assets/profile.jpg'},
    {name:'Udit Jain',position:'SDE',company:'Facebook',image:'../../../../assets/profile.jpg'},
    {name:'Gurpreet Chabbra',position:'SDE',company:'Apple',image:'../../../../assets/profile-girl.png'},
    {name:'Awanish Tiwari',position:'SDE',company:'Newput',image:'../../../../assets/profile.jpg'},
    {name:'Siya',position:'SDE',company:'Newput',image:'../../../../assets/profile.jpg'},
    {name:'Anjana',position:'SDE',company:'Newput',image:'../../../../assets/profile-girl.png'},
    {name:'Alex taxeria',position:'SDE',company:'Newput',image:'../../../../assets/profile.jpg'},
    {name:'Suman',position:'SDE',company:'Newput',image:'../../../../assets/profile.jpg'},
    {name:'Rupak',position:'SDE',company:'Newput',image:'../../../../assets/profile.jpg'},
  ];
  ngOnInit(): void {
  }

}
