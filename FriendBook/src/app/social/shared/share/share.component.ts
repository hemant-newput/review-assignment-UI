import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { SharedService } from 'src/app/services/sharedServices/shared.service';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.scss']
})
export class ShareComponent implements OnInit {

  constructor(private sharedService: SharedService, private postService: PostService) { }
  @Output() public optionSelected = new EventEmitter();
  ngOnInit(): void {
  }

  sharePost(media) {
    this.optionSelected.emit(media);
  }
}
