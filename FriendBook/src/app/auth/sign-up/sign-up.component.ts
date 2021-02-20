import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      fullName:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      occupation:['', Validators.required],
      dob:['', Validators.required],
      address:['', Validators.required],
      password:['', Validators.required],
      confirmPassword:['', Validators.required]
    })
  }

}
