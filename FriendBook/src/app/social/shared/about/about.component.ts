import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from 'src/app/services/sharedServices/shared.service';
import { UserDetailService } from 'src/app/services/userDetailService/user-detail.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private userDetailService: UserDetailService,
    private sharedService: SharedService
  ) {}
  public isWorkFormEditable: boolean;
  public isBasicFormEditable: boolean;
  public workForm: FormGroup;
  public basicForm: FormGroup;
  ngOnInit(): void {
    this.sharedService.setTitle('About');
    this.generateBasicForm();
    this.generateWorkForm();
    this.populateForms();
  }
  generateBasicForm() {
    this.basicForm = this.fb.group({
      name: ['', Validators.required],
      gender: ['', Validators.required],
      dob: [''],
      married: [''],
      location: [''],
    });
    this.basicForm.valueChanges.subscribe((data) => {
      // console.log(this.basicForm.value);
    });
    this.basicForm.disable();
  }
  generateWorkForm() {
    this.workForm = this.fb.group({
      occupation: ['', Validators.required],
      skills: ['', Validators.required],
      job: [''],
    });
    this.workForm.valueChanges.subscribe((data) => {
      // console.log(this.workForm.value);
    });
    this.workForm.disable();
  }
  populateForms() {
    this.userDetailService.getUserData().subscribe((userData) => {
      // console.log(userData);
      this.basicForm.patchValue({
        name: userData.name,
        gender: userData.gender,
        dob: userData.dob,
        married: userData.married,
        location: userData.location,
      });
      this.workForm.patchValue({
        occupation: userData.occupation,
        skills: userData.skills,
        job: userData.job,
      });
    });
  }
  makeBasicFormEditable() {
    this.isBasicFormEditable = true;
    this.basicForm.enable();
  }
  makeBasicFormUneditable() {
    this.isBasicFormEditable = false;
    this.basicForm.disable();
  }
  makeWorkFormEditable() {
    this.isWorkFormEditable = true;
    this.workForm.enable();
  }
  makeWorkFormUneditable() {
    this.isWorkFormEditable = false;
    this.workForm.disable();
  }
  updateBasicInfo() {
    this.userDetailService.updateBasicDetails(this.basicForm.value);
  }
  updateWorkInfo() {
    this.userDetailService.updateWorkDetails(this.workForm.value);
  }
}
