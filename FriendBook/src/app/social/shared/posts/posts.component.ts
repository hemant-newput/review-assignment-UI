import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { PostService } from 'src/app/services/post.service';
import { SharedService } from 'src/app/services/sharedServices/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  public addPostForm: FormGroup;
  public postType = 'photo';
  @ViewChild('addPostModal') addPostModal: ElementRef;
  @ViewChild('sharePostModal') sharePostModal: ElementRef;
  selectedImage: any;
  constructor(private fb: FormBuilder, private sharedService: SharedService, private postService: PostService, private router: Router) { }
  public posts = [];
  public isLoading: boolean;
  public selectedPost: any;
  public internalAccess: boolean;
  ngOnInit(): void {
    this.isLoading = true;
    this.sharedService.setTitle('TimeLine');
    this.createAddPostForm();
    this.getTimelinePosts(localStorage.getItem('userID'));
  }

  public createAddPostForm(): void {
    this.addPostForm = this.fb.group({
      heading: ['', Validators.required],
      postType: [this.postType, Validators.required],
      photoUrl: [''],
      caption: [''],
      message: ['']
    });
    this.addPostForm.valueChanges
      .subscribe(data => {
        console.log(this.addPostForm.value);
        this.postType = this.addPostForm.value.postType;
      });
  }
  addPost(): void {
    if (this.addPostForm.valid) {
      console.log('hey hemant please add this post' + this.addPostForm.value);
      this.postService.addPost(this.addPostForm.value).subscribe((data) => {
        this.posts = data.body && data.body.data && data.body.data.data;
        this.posts = this.posts.sort((a, b) => (new Date(a.updatedAt) > new Date(b.updatedAt)) ? 1 : -1);
        console.log(data);
        this.addPostModal.nativeElement.click();
        Swal.fire({ position: 'top-end', icon: 'success', title: 'Adding Post to your Timeline', showConfirmButton: false, timer: 1500 });
      });
    }
    else {
      Swal.fire('Keep calm and check your form');
    }
  }
  likePost(post): void {
    if (post.userLiked) {
      post.userLiked = false;
      this.posts.map((data) => {
        if (data.name === post.name) {
          data.numberOfLikes = parseInt(data.numberOfLikes, 10);
          if (data.numberOfLikes) {
            data.numberOfLikes = data.numberOfLikes -= 1;
          }
        }
      });
      this.postService.dislikePost(post).subscribe(() => {
        this.sharedService.speak('Ahh i dont like it');
      });
    } else {
      post.userLiked = true;
      this.posts.map((data) => {
        if (data.name === post.name) {
          data.numberOfLikes = parseInt(data.numberOfLikes, 10);
          data.numberOfLikes = data.numberOfLikes += 1;
        }
      });
      this.postService.likePost(post).subscribe(() => {
        this.sharedService.speak('this is nice i guess')
      });
    }
  }

  sharePost(media): void {
    if (media === 'friendbook') {
      this.selectedPost.userShared = true;
      this.posts.map((data) => {
        if (data.name === this.selectedPost.name) {
          data.numberOfShares = parseInt(data.numberOfShares, 10);
          data.numberOfShares = data.numberOfShares += 1;
        }
      });
      this.postService.sharePost(this.selectedPost).subscribe(() => {
        this.sharePostModal.nativeElement.click();
        this.sharedService.timerModal('Successfully shared on your Timeline!', 2000);
      });
    }
    if (media === 'whatsapp') {
      const url = 'https://api.whatsapp.com/send';
      const text = this.selectedPost && this.selectedPost.image_url;
      window.open(`${url}?text='${encodeURIComponent(text)}`);
      this.sharePostModal.nativeElement.click();
    }
    if (media === 'clipboard') {
      const text = this.selectedPost && this.selectedPost.image_url;
      navigator.clipboard.writeText(text).then(() => {
        Swal.fire({
          position: 'top-end', icon: 'success',
          title: 'Successfully copied to ClipBoard!', showConfirmButton: false, timer: 1500
        });
        this.sharePostModal.nativeElement.click();
      }, (err) => {
        this.sharedService.timerModal('Async: Could not copy text:', 2000);
      });
    }
  }
  saveSelectedPost(post): void {
    this.selectedPost = post;
  }
  getTimelinePosts(userID): void {
    this.sharedService.speak(`Fetching timeline Posts..`);
    this.postService.getTimelinePosts(userID).subscribe((posts) => {
      this.internalAccess = this.sharedService.getInternalAccess();
      this.posts = posts.data;
      this.posts = posts.data.sort((a, b) => (new Date(a.updatedAt) > new Date(b.updatedAt)) ? 1 : -1);
      this.isLoading = false;
    });
  }
  //switch case
  public formatDate(date): string {
    const currenctDate = moment();
    const duration = currenctDate.diff(date, 'seconds');
    let result = `${duration} seconds ago`;
    if (duration > 60) { // > 60 seconds
      result = `${currenctDate.diff(date, 'minutes')} minutes ago`;
    }
    if (duration > 3660) { // > 60 mins = 3600 seconds
      result = `${currenctDate.diff(date, 'hours')} hours ago`;
    }
    if (duration > 86400) { // > 24 hours = 1440 mins = 86400 seconds
      result = `${currenctDate.diff(date, 'days')} days ago`;
    }
    if (duration > 604800) { // > 7 days = 168 hours = 10080 mins = 6,04,800 seconds
      result = `${currenctDate.diff(date, 'weeks')} weeks ago`;
    }
    if (duration > 2419200) { // > 4 weeks = 28 days = 672 hours = 40320 mins = 2419200 seconds
      result = `${currenctDate.diff(date, 'months')} months ago`;
    }
    return result;
  }
  getInternalAccess(){
    return this.sharedService.getInternalAccess();
  }
  enlargePost(postImage): void {
    this.selectedImage = postImage;
  }
  swapTimeline(user): void {
    localStorage.setItem('userID', user.userid);
    location.reload();
  }
  deletePost(post): void {
    this.sharedService.speak('U are requesting to delete a post , we wont be able to revert this, u still wanna continue');
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.postService.deletePost(post).subscribe(posts => {
          this.sharedService.speak('Post deleted Successfully');
          this.posts = posts.data && posts.data.data;
          this.posts = this.posts.sort((a, b) => (new Date(a.updatedAt) > new Date(b.updatedAt)) ? 1 : -1);
          Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
        });
      }
    });
  }
  optionSelected(media) {
    console.log(media)
  }
}
