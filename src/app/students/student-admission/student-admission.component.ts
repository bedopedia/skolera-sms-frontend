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
    emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    protected captchaFormGroup: FormGroup;
    captchaVerified = false;
    recaptcha;
    guardiansError: boolean = false;
    isSubmitting = false;
    selectedCountry;
    selectedLevel = null;
    levelError = false;
    levels = [];
    maxAllowedDate = new Date();
    constructor(
        private formBuilder: FormBuilder,
        private applicationService: ApplicationService,
        private router: Router
    ) { }
    ngOnInit() {
        // this.captchaFormGroup = this.formBuilder.group({
        //     recaptcha: ['', Validators.required]
        // });
        this.maxAllowedDate.setDate( this.maxAllowedDate.getDate() - 6 );
        this.maxAllowedDate.setFullYear( this.maxAllowedDate.getFullYear() - 2 );
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
    getLevels() {
        if (this.levels.length > 0) return;
        this.applicationService.getLevels().subscribe(
            (res: any) => {
                this.levels = res;
            }
        )
    }
    changeStep(step) {
        this.currentStep = step;
    }
    proceedToDetails() {
        if (!this.selectedLevel || this.selectedLevel == '') {
            this.levelError = true;
            return;
        }
        this.currentStep = 2;
    }
    OnApplicationAttributesSubmit() {
        if (!this.applicationAttributesForm.valid) return;
        this.currentStep = 3;
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
            'mobile_number': ['', [Validators.required]],
            'email': ['', [Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), Validators.required]]
        })
    }
    createStudent() {
        let guardiansAttributes = this.guardians.map(guardian => guardian.form.value)
        let application = {
            "application": {
                "level_id": this.selectedLevel,
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