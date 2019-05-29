import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { COUNTRIES } from '@skolera/resources';
import { ApplicationService } from '@skolera/services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-student-admission',
    templateUrl: './student-admission.component.html',
    styleUrls: ['./student-admission.component.scss']
})
export class StudentAdmissionComponent implements OnInit {

    currentStep = 1;
    countries = COUNTRIES;
    @ViewChild('applicationAttributesForm') applicationAttributesForm: NgForm;
    guardians = [];
    phonePattern = "[0-9]{8,16}$";
    landlinePattern = "[0-9]{6,12}$";
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    protected captchaFormGroup: FormGroup;
    captchaVerified = false;
    recaptcha;
    guardiansError: boolean = false;
    isSubmitting = false;
    constructor(
        private formBuilder: FormBuilder,
        private applicationService: ApplicationService,
        private router: Router
    ) { }
    ngOnInit() {
        this.captchaFormGroup = this.formBuilder.group({
            recaptcha: ['', Validators.required]
        });
        this.guardians = [
            {
                form: this.buildGuardianFormGroup(),
                isSubmitted: false
            },
            {
                form: this.buildGuardianFormGroup(),
                isSubmitted: false
            }
        ]
    }
    changeStep(step) {
        this.currentStep = step;
    }
    OnApplicationAttributesSubmit() {
        if (!this.applicationAttributesForm.valid) return;
        this.currentStep = 2;
    }
    submitGuardians() {
        this.guardiansError = false;
        this.guardians.forEach(guardian => {
            guardian.isSubmitted = true;
            if (!guardian.form.valid) {
                this.guardiansError = true;
            }
        })
        if (this.guardiansError) return;
        this.createStudent();
    }
    // submitStudent() {
    //     if(!this.captchaVerified) return;
    //     this.createStudent();
    // }
    addGuardianFormGroup() {
        this.guardians.push({
            form: this.buildGuardianFormGroup(),
            isSubmitted: false
        })
    }
    deleteGuardian(index) {
        this.guardians = this.guardians.filter((e, i) => i != index);
    }
    buildGuardianFormGroup() {
        return this.formBuilder.group({
            'name': ['', [Validators.required]],
            'relation': ['Father', [Validators.required]],
            'primary_address': ['', []],
            'secondary_address': ['', []],
            'mobile_number': ['', [Validators.required, Validators.pattern('[0-9]{8,16}$')]],
            'email': ['', [Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required]]
        })
    }
    createStudent() {
        let guardiansAttributes = this.guardians.map(guardian => guardian.form.value)
        let application = {
            "application": {
                "applicant_attributes": {
                    ...this.applicationAttributesForm.value,
                    "guardians_attributes": guardiansAttributes
                }
            }
        }
        this.isSubmitting = true;
        this.applicationService.addStudent(application).subscribe(
            res => {
                this.router.navigate(['students/admission-success']);
            },
            err => {
                this.isSubmitting = false;
            }
        );
    }
    // captchaLoad() {

    // }
    // captchaReady() {

    // }
    // captchaExpire() {

    // }
    // captchaSuccess(event) {
    //     this.captchaVerified = true;
    // }
}