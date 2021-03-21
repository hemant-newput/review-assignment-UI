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

  constructor(private fb: FormBuilder, private sharedService: SharedService) { }
  public posts = [
    {
      name: 'Hemant Shrivastava', like: 10, share: 15, image: '../../../../assets/wallpaper1.jpg', caption: 'Caption h bawa caption hai', logo: '../../../../assets/loginAvatar.png', description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veniam hic dolores debitis, quae
    aliquam inventore porro iusto temporibus qui incidunt deleniti nobis laboriosam nulla id eius corrupti
    repudiandae quo!` },
    {
      name: 'Deepa Dwivedi', like: 1000, share: 15, logo: '../../../../assets/loginAvatar3.png', caption: 'Caption h bawa caption hai', description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veniam hic dolores debitis, quae
    aliquam inventore porro iusto temporibus qui incidunt deleniti nobis laboriosam nulla id eius corrupti
    repudiandae quo!`
    },
    {
      name: 'Anjuri Saxena', like: 10000, share: 150, image: '../../../../assets/wallpaper2.jpg', caption: 'Caption h bawa caption hai', logo: '../../../../assets/loginAvatar2.png', description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veniam hic dolores debitis, quae
    aliquam inventore porro iusto temporibus qui incidunt deleniti nobis laboriosam nulla id eius corrupti
    repudiandae quo!`
    },
    {
      name: 'Deepa Dwivedi', like: 1000, share: 15, image: '../../../../assets/wallpaper3.jpg', caption: 'Caption h bawa caption hai', logo: '../../../../assets/loginAvatar3.png', description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veniam hic dolores debitis, quae
    aliquam inventore porro iusto temporibus qui incidunt deleniti nobis laboriosam nulla id eius corrupti
    repudiandae quo!`
    },
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
  likePost(post) {
    this.posts.map((data) => {
      if (data.name === post.name) {
        data.like = data.like += 1
      }
    })
  }
  sharePost(post) {
    this.posts.map((data) => {
      if (data.name === post.name) {
        data.share = data.share += 1
      }
    })
  }

}
