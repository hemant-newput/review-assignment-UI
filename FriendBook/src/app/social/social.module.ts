import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './shared/profile/profile.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { FriendsComponent } from './shared/friends/friends.component';
import { FollowComponent } from './shared/follow/follow.component';
import { TimelineComponent } from './shared/timeline/timeline.component';
import { SocialRoutingModule } from './social-routing.module';
import { PhotosComponent } from './shared/photos/photos.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from './shared/posts/posts.component';
import { AboutComponent } from './shared/about/about.component';
import { FriendListComponent } from './shared/friend-list/friend-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomePageComponent,
    ProfileComponent,
    NavBarComponent,
    FriendsComponent,
    FollowComponent,
    TimelineComponent,
    PhotosComponent,
    PostsComponent,
    AboutComponent,
    FriendListComponent,
  ],
  imports: [
    CommonModule,
    SocialRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SocialModule {}
