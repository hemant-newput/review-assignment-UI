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
        (resp) => {
          this.router.navigate(['/home']);
          localStorage.setItem('token', resp.body.data.token);
          localStorage.setItem('refreshToken', resp.body.data.refreshToken);
          localStorage.setItem('userID', resp.body.data.userID.toString());
          this.toastr.success(resp.body.customMsg);
          this.sharedService.speak(resp.body.customMsg);
        },
        (err) => {
          if (err.error.customMsg === 'No user Found with that userName') {
            this.toastr.error(err.error.message);
          } else {
            this.toastr.warning(err.error.message);
          }
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
