import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './sharedServices/config.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, private configService: ConfigService) { }
  public url = "http://localhost:5000";
  addPost(post): any {
    const userID = localStorage.getItem('userID')
    const url = `${this.url}/home/users/${userID}/posts/create`;
    return this.http.post<any>(url, post, { observe: 'response' });
  }

  getUserData(userID): any {
    const url = `${this.url}/home/${userID}/userData`;
    return this.http.post<any>(url, { observe: 'response' });
  }

  getTimelinePosts(userID): any {
    const url = `${this.url}/home/posts/${userID}`;
    return this.http.post<any>(url, { observe: 'response' });
  }

  likePost(post): any {
    const url = `${this.url}/home/posts/${post.postid}/like`;
    return this.http.post<any>(url, { observe: 'response' });
  }

  dislikePost(post): any {
    const url = `${this.url}/home/posts/${post.postid}/dislike`;
    return this.http.post<any>(url, { observe: 'response' });
  }

  sharePost(post): any {
    const url = `${this.url}/home/posts/${post.postid}/share`;
    return this.http.post<any>(url, { observe: 'response' });
  }
  deletePost(post) {
    const url = `${this.url}/home/posts/${post.postid}/delete`;
    return this.http.post<any>(url, { observe: 'response' });
  }
}
