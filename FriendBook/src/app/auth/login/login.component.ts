import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    document.title = 'Login';
    this.loginForm = this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })
  }
  submitForm()
  {
    //Hii i will run when u submit form
    this.router.navigate(['/home'])
  }
}
