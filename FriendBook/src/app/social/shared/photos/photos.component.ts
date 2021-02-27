import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  constructor() { }
  public srcs = [{
    value:"../../../../assets/photo1.jpg"
  },{
    value:"../../../../assets/photo2.jpg"
  },{
    value:"../../../../assets/photo3.jpg"
  },{
    value:"../../../../assets/photo4.jpg"
  }]
  ngOnInit(): void {
    document.title = 'Photos';
  }

}
