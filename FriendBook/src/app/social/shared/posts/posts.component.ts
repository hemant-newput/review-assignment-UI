import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/sharedServices/shared.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public addPostForm: FormGroup;
  public postType = 'photo';

  constructor(private fb: FormBuilder,private sharedService:SharedService) { }
  public posts = [
    { name: 'Hemant Shrivastava', like: '1000', comments: '20', share: '15', image: '../../../../assets/wallpaper1.jpg', logo: '../../../../assets/loginAvatar.png' },
    { name: 'Anjuri Saxena', like: '10000', comments: '200', share: '150', image: '../../../../assets/wallpaper2.jpg', logo: '../../../../assets/loginAvatar2.png' },
    { name: 'Deepa Dwivedi', like: '1000', comments: '20', share: '15', image: '../../../../assets/wallpaper3.jpg', logo: '../../../../assets/loginAvatar3.png' },
  ];

  ngOnInit(): void {
    this.sharedService.setTitle('TimeLine')
    this.createAddPostForm();
  }

  public createAddPostForm() {
    this.addPostForm = this.fb.group({
      heading: ['', Validators.required],
      postType: [this.postType, Validators.required],
      photoUrl: ['', Validators.pattern('https?:\/\/.*\.(?:png|jpg)')],
      caption: [''],
      message: ['']
    });
    this.addPostForm.valueChanges
      .subscribe(data => {
        console.log(this.addPostForm.value)
        this.postType = this.addPostForm.value.postType
      });
  }
  addPost() {
    if (this.addPostForm.valid) {
      console.log("hey hemant please add this post" + this.addPostForm.value)
    }
    else {
      alert('Keep calm and check your form')
    }
  }

}
