import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './shared/about/about.component';
import { FriendListComponent } from './shared/friend-list/friend-list.component';
import { PhotosComponent } from './shared/photos/photos.component';
import { PostsComponent } from './shared/posts/posts.component';
import { ProfileComponent } from './shared/profile/profile.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent, children: [
      { path: '', redirectTo: 'posts', pathMatch: 'full' },
      { path: 'posts', component: PostsComponent },
      { path: 'about', component: AboutComponent },
      { path: 'photos', component: PhotosComponent },
      { path: 'friends', component: FriendListComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
