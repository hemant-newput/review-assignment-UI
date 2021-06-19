import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { WatcherComponent } from './watcher/watcher.component';
import { ForgetComponent } from './forget/forget.component';



@NgModule({
  declarations: [LoginComponent, SignUpComponent, WatcherComponent, ForgetComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AuthRoutingModule,
    HttpClientModule,
  ]
})
export class AuthModule { }
