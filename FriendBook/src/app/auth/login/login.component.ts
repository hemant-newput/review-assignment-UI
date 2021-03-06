import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/loginService/login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup
  constructor(private formBuilder:FormBuilder,private router:Router,private loginService:LoginService) { }

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
    (this.loginService.tryLogin(this.loginForm.value.username,this.loginForm.value.password)) ? this.router.navigate(['/home']): this.router.navigate(['/login']);
  }
}
