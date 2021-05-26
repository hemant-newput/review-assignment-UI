import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginService/login.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from 'src/app/services/sharedServices/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private toastr: ToastrService,
    private sharedService: SharedService,
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
    this.loginService
      .tryLogin(this.loginForm.value.username, this.loginForm.value.password)
      .subscribe(
        (data) => {
          if (data.body.validate) {
            this.router.navigate(['/home']);
            localStorage.setItem('token', data.body.token);
            localStorage.setItem('refreshToken', data.body.refreshToken);
            localStorage.setItem('userID', data.body.userID.toString());
            this.toastr.success(data.body.message);
            this.sharedService.speak(data.body.message);
          } else {
            this.router.navigate(['/auth/login']);
            if (data.body.message === 'No user Found with that userName') {
              this.toastr.error(data.body.message);
            } else {
              this.toastr.warning(data.body.message);
            }
          }
        },
        (err) => {
          console.log(err);
        }
      );
  }


  ngAfterViewChecked() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/customLogin.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
