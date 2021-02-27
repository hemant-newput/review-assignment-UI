import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  constructor() { }
public posts = [
  {name:'Hemant Shrivastava',like:'1000',comments:'20',share:'15',image:'../../../../assets/wallpaper1.jpg',logo:'../../../../assets/loginAvatar.png'},
  {name:'Anjuri Saxena',like:'10000',comments:'200',share:'150',image:'../../../../assets/wallpaper2.jpg',logo:'../../../../assets/loginAvatar2.png'},
  {name:'Deepa Dwivedi',like:'1000',comments:'20',share:'15',image:'../../../../assets/wallpaper3.jpg',logo:'../../../../assets/loginAvatar3.png'},
];
  ngOnInit(): void {
    document.title = 'Timeline';
  }

}
