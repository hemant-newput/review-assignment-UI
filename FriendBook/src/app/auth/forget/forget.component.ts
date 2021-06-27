import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginService/login.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/sharedServices/shared.service';
@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent implements OnInit {
  public loginForm: FormGroup;
  public isLoading: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private sharedService: SharedService,
    private router: Router,
    private toastr: ToastrService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    document.title = 'Login';
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  submitForm(): void {
    this.isLoading = true;
    this.loginService
      .resetPassword(this.loginForm.value.username)
      .subscribe(
        () => {
          this.isLoading = false;
          this.toastr.success('Password Sent to Your Email.. Please check your Inbox');
        }
      );
  }
}
