import { Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignUpService } from 'src/app/services/signUpService/sign-up.service';
import { STEP_ITEMS } from '../configs/signUpFormConfig';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public currentStep = 0;
  public currentFormConfig: any;
  public formObject: any;
  public signUpObject = {};
  public isLoading: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private signUpService: SignUpService,
    private router: Router,
    private toastr: ToastrService,
    private elementRef: ElementRef
  ) { }

  ngOnInit(): void {
    document.title = 'Sign Up';
    this.createForm();
  }
  public submitForm(): void {
    this.persistData();
    this.isLoading = true;
    this.signUpService.signUp(this.signUpObject).subscribe(
      (data) => {
        this.isLoading = true;
        data
          ? this.router.navigate(['/auth/login'])
          : this.router.navigate(['/auth/signup']);
      },
      (err) => {
        console.log(err);
      });
  }

  ngAfterViewChecked() {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '../../../assets/customSignUp.js';
    this.elementRef.nativeElement.appendChild(s);
  }

  renderForm(movement): void {
    if (movement === 'next') {
      this.persistData();
      this.currentStep += 1;
    }
    else if (movement === 'previous') {
      this.currentStep -= 1;
    }
    else if (movement === 'submit') {
      this.submitForm();
    }
    this.createForm();
  }
  public createForm(): void {
    const formGeneratorArray = {};
    this.formObject = STEP_ITEMS[this.currentStep] && STEP_ITEMS[this.currentStep].data;
    if (this.formObject) {
      this.formObject.forEach((obj) => {
        formGeneratorArray[obj.name] = ['', obj.validators]
      })
      this.signUpForm = this.formBuilder.group(formGeneratorArray);
    }
  }
  persistData(): void {
    const keys = Object.keys(this.signUpForm.value);
    keys.forEach((control) => {
      this.signUpObject[control] = this.signUpForm.value[control];
    });
    console.log(this.signUpObject)

  }
  greaterThan(a, b): boolean {
    return a > b;
  }
  lessThan(a, b): boolean {
    return a < b;
  }
  equalTo(a, b): boolean {
    return a === b;
  }
  notEqualTo(a, b): boolean {
    return a !== b;
  }
}
