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
  public isLoading: boolean;
  constructor(private sharedService: SharedService, private userDetailService: UserDetailService) { }
  public srcs;
  ngOnInit(): void {
    this.sharedService.speak(`Wanna see some photos`)
    this.isLoading = true;
    this.sharedService.setTitle('Photos');
    const userID = localStorage.getItem('userID');
    this.userDetailService.getUserPhotos(userID).subscribe((data) => {
      this.srcs = data['data'];
      this.isLoading = false;
    });
  }
  enlargeImage(image): void {
    this.current = image;
  }
}
