import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignUpService } from 'src/app/services/signUpService/sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
    private toastr: ToastrService,
    private elementRef: ElementRef
  ) {}
  get fullName(): any {
    return this.signUpForm.controls['fullName'];
  }
  get email(): any {
    return this.signUpForm.controls['email'];
  }
  get phone(): any {
    return this.signUpForm.controls['phone'];
  }
  get occupation(): any {
    return this.signUpForm.controls['occupation'];
  }
  get dob(): any {
    return this.signUpForm.controls['dob'];
  }
  get address(): any {
    return this.signUpForm.controls['address'];
  }
  get password(): any {
    return this.signUpForm.controls['password'];
  }
  get confirmPassword(): any {
    return this.signUpForm.controls['confirmPassword'];
  }
  ngOnInit(): void {
    document.title = 'Sign Up';
    this.signUpForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      occupation: ['', Validators.required],
      dob: ['', Validators.required],
      address: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }
  public submitForm() {
    if (this.password.value !== this.confirmPassword.value) {
      this.toastr.info('Password not matched');
    } else {
      this.signUpService.signUp(this.signUpForm.value).subscribe(
        (data) => {
          data
            ? this.router.navigate(['/auth/login'])
            : this.router.navigate(['/auth/signup']);
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  ngAfterViewChecked() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/customSignUp.js';
    this.elementRef.nativeElement.appendChild(s);
  }
}
