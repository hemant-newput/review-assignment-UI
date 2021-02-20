import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AboutComponent } from './shared/about/about.component';
import { FriendListComponent } from './shared/friend-list/friend-list.component';
import { PhotosComponent } from './shared/photos/photos.component';
import { PostsComponent } from './shared/posts/posts.component';
import { ProfileComponent } from './shared/profile/profile.component';

const routes: Routes = [
  {path:'home',component:HomePageComponent,children:[
    {path:'posts',component:PostsComponent,outlet:'timelineRouter'},
    {path:'about',component:AboutComponent,outlet:'timelineRouter'},
    {path:'photos',component:PhotosComponent,outlet:'timelineRouter'},
    {path:'friends',component:FriendListComponent,outlet:'timelineRouter'}
  ] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialRoutingModule { }
