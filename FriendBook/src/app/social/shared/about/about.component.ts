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
  ) { }
  public isWorkFormEditable: boolean;
  public isBasicFormEditable: boolean;
  public workForm: FormGroup;
  public basicForm: FormGroup;
  public isLoading: boolean;
  public internalAccess: boolean;
  ngOnInit(): void {
    this.sharedService.speak("Wait a second by the time we speak you about you")
    this.isLoading = true;
    this.sharedService.setTitle('About');
    this.internalAccess = this.sharedService.getInternalAccess();
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
    });
    this.basicForm.disable();
  }
  generateWorkForm() {
    this.workForm = this.fb.group({
      occupation: ['', Validators.required],
      skills: ['', Validators.required],
      jobCompany: [''],
    });
    this.workForm.valueChanges.subscribe((data) => {
    });
    this.workForm.disable();
  }
  populateForms() {
    const userID = localStorage.getItem('userID') || 1;
    this.userDetailService.getUserData(userID).subscribe((userData) => {
      userData = userData.data;
      this.basicForm.patchValue({
        name: userData.name,
        gender: userData.gender,
        dob: new Date(parseInt(userData.dob)),
        married: userData.married,
        location: userData.location,
      });
      this.workForm.patchValue({
        occupation: userData.occupation,
        skills: userData.skills,
        jobCompany: userData.jobCompany,
      });
      this.isLoading = false;
      this.sharedService.sendMessage(userData);
      this.sharedService.speak(`here we go , u can update this data if u feel there is some misunderstanding of what we know about u`)
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
    this.userDetailService.updateBasicDetails(this.basicForm.value).subscribe((userData) => {
      this.sharedService.sendMessage({ userData });
      this.makeBasicFormUneditable();
    });
  }
  updateWorkInfo() {
    this.userDetailService.updateWorkDetails(this.workForm.value).subscribe((userData) => {
      this.sharedService.sendMessage({ userData });
      this.makeWorkFormUneditable();
    });
  }
}
