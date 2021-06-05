import { Validators } from "@angular/forms";

const userData = {
    firstName: { type: 'text', validations: {}, errors: {}, placeholder: 'First Name', validators: Validators.required },
    lastName: { type: 'text', validations: {}, errors: {}, placeholder: 'Last Name' , validators: Validators.required},
    dateOfBirth: { type: 'date', validations: {}, errors: {}, placeholder: 'Date of Birth' , validators: Validators.required},
    email: { type: 'email', validations: {}, errors: {}, placeholder: 'Enter your Email' , validators: Validators.required},
    mobile: { type: 'text', validations: {}, errors: {}, placeholder: 'Enter your phone Number' , validators: Validators.required},
    gender: { type: 'text', validations: {}, errors: {}, placeholder: 'select gender' , validators: Validators.required},
    martialStatus: { type: 'date', validations: {}, errors: {}, placeholder: 'Are u married' , validators: Validators.required},
    company: { type: 'date', validations: {}, errors: {}, placeholder: 'Company u work For' , validators: Validators.required},
    position: { type: 'text', validations: {}, errors: {}, placeholder: 'What u do there' , validators: Validators.required},
};

const skillsData = {
    skills: { type: 'text', validations: {}, errors: {}, placeholder: 'Full Address' , validators: Validators.required},
};

const profileData = {
    profile: { type: 'text', validations: {}, errors: {}, placeholder: 'Choose you profile Photo' , validators: Validators.required},
};
const address ={
    address: { type: 'text', validations: {}, errors: {}, placeholder: 'What u live' , validators: Validators.required},
}
const STEP_ITEMS = [
    { label: 'user', data: userData },
    { label: 'address', data: address },
    { label: 'skills', data: skillsData },
    { label: 'profile', data: profileData },
    { label: 'reviewAndSubmit', data: {} }
];

export { STEP_ITEMS }