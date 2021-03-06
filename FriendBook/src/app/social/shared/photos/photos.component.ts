import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/sharedServices/shared.service';
import { UserDetailService } from 'src/app/services/userDetailService/user-detail.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss'],
})
export class PhotosComponent implements OnInit {
  public current: string;
  constructor(private sharedService: SharedService ,private userDetailService:UserDetailService) {}
  public srcs;
  ngOnInit(): void {
    this.sharedService.setTitle('Photos');
    this.srcs = this.userDetailService.getUserPhotos();
  }
  enlargeImage(image) {
    this.current = image;
  }
}
