import { Validators } from '@angular/forms';

const userData = [
    {
        class: 'fa fa-user',
        name: 'firstName',
        type: 'text',
        validations: {},
        errors: 'Enter Your First Name',
        placeholder: 'First Name',
        validators: [Validators.required, Validators.pattern('')],

    },
    {
        class: 'fa fa-user',
        name: 'lastName',
        type: 'text',
        validations: {},
        errors: 'Enter your Last Name',
        placeholder: 'Last Name',
        validators: Validators.required,

    },
    {
        class: 'fa fa-calendar',
        name: 'dateOfBirth',
        type: 'date',
        validations: {},
        errors: 'Enter your Date of Birth',
        placeholder: 'Date of Birth',
        validators: Validators.required,

    },
    {
        class: 'fa fa-envelope',
        name: 'email',
        type: 'text',
        validations: {},
        errors: 'Enter your Email',
        placeholder: 'Enter your Email',
        validators: Validators.required,

    },
    {
        class: 'fa fa-phone',
        name: 'mobile',
        type: 'text',
        validations: {},
        errors: 'Enter your mobile number',
        placeholder: 'Enter your phone Number',
        validators: Validators.required,

    },
    {
        class: 'fa fa-venus',
        name: 'gender',
        type: 'radio',
        validations: {},
        errors: 'Select Your Gender',
        options: [{ value: 'Male' }, { value: 'Female' }, { value: 'Others' }],
        placeholder: 'select gender',
        validators: Validators.required,

    },
    {
        class: 'fa fa-briefcase',
        name: 'company',
        type: 'text',
        validations: {},
        errors: 'Enter your company',
        placeholder: 'Company u work For',
        validators: Validators.required,

    },
    {
        class: 'fa fa-laptop',
        name: 'position',
        type: 'text',
        validations: {},
        errors: 'Enter your position',
        placeholder: 'What u do there',
        validators: Validators.required,

    },
];

const skillsData = [
    {
        class: 'fa fa-laptop',
        name: 'skills',
        type: 'text',
        validations: {},
        errors: 'List down your skills',
        placeholder: 'Skills you are Proficient At',
        validators: Validators.required,

    },
    {
        class: 'fa fa-heart',
        name: 'martialStatus',
        type: 'radio',
        options: [{ value: 'Married' }, { value: 'Unmarried' }],
        validations: {},
        errors: 'Are you Married',
        placeholder: 'Are u married',
        validators: Validators.required,

    },
];

const profileData = [
    {
        class: 'fa fa-user',
        name: 'profileImage',
        type: 'text',
        validations: {},
        errors: 'Choose your profile photo',
        placeholder: 'Choose profile Photo',
        validators: Validators.required,

    },
];
const address = [
    {
        class: 'fa fa-road',
        name: 'street',
        type: 'text',
        validations: {},
        errors: 'Enter your Street',
        placeholder: 'Enter your Street',
        validators: Validators.required,

    },
    {
        class: 'fa fa-street-view',
        name: 'city',
        type: 'text',
        validations: {},
        errors: 'Enter your city',
        placeholder: 'Enter your city',
        validators: Validators.required,

    }, {
        class: 'fa fa-map-pin',
        name: 'state',
        type: 'text',
        validations: {},
        errors: 'Enter your state',
        placeholder: 'Enter your state',
        validators: Validators.required,

    }, {
        class: 'fa fa-home',
        name: 'country',
        type: 'text',
        validations: {},
        errors: 'Enter your country',
        placeholder: 'Enter your country',
        validators: Validators.required,

    }
];
const password = [
    {
        class: 'fa fa-key',
        name: 'password',
        type: 'text',
        validations: {},
        errors: 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character',
        placeholder: 'Select a Password',
        validators: [Validators.required], // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$')

    },
    {
        class: 'fa fa-key',
        name: 'confirmPassword',
        type: 'text',
        validations: {},
        errors: 'Password do not matched',
        placeholder: 'Confirm Password',
        validators: [Validators.required],

    },
    {
        label: 'I agree to Terms and Conditions',
        class: 'fa fa-lock',
        name: 'terms',
        options: [{ value: 'I agree to Terms and Conditions' }],
        type: 'checkbox',
        validations: {},
        errors: '',
        placeholder: 'Terms and condition',
        validators: Validators.required,

    },
];
const STEP_ITEMS = [
    { label: 'user', data: userData },
    { label: 'address', data: address },
    { label: 'skills', data: skillsData },
    { label: 'profile', data: profileData },
    { label: 'reviewAndSubmit', data: password },
];

export { STEP_ITEMS };
