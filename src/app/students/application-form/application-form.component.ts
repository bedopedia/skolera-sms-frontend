import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ApplicationService, StatusesService } from '@skolera/services';
import { COUNTRIES } from '@skolera/resources';

@Component({
    selector: 'application-form',
    templateUrl: './application-form.component.html',
    styleUrls: ['./application-form.component.scss']
})
export class ApplicationFormComponent implements OnInit {

    @Input() application = null;
    @Output() submit = new EventEmitter();
    currentStep = 1;
    countries = COUNTRIES;
    @ViewChild('applicationAttributesForm') applicationAttributesForm: NgForm;
    guardians = [];
    emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    protected captchaFormGroup: FormGroup;
    captchaVerified = false;
    recaptcha;
    guardiansError: boolean = false;
    @Input() isSubmitting = false;
    selectedLevel = null;
    levelError = false;
    levels = [];
    maxAllowedDate = new Date();
    selectedStatus = null;
    statuses = [];
    feesArray = [
        {
            name: 'PAID',
            status: true
        },
        {
            name: 'NOT PAID',
            status: false
        }
    ];
    selectedApplicationFees = null;
    selectedTuitionFees = null;
    applicant = {
        firstName: '',
        lastName: '',
        birthDate: null,
        birthCity: '',
        birthCountry: 'Egypt',
        primaryAddress: '',
        secondaryAddress: '',
        mobileNumber: '',
        landline: '',
        emailAddress: ''
    }
    constructor(
        private formBuilder: FormBuilder,
        private applicationService: ApplicationService,
        private statusesService: StatusesService
    ) { }
    ngOnInit() {
        if (this.application) {
            this.setApplicationValues();
        }
        // this.captchaFormGroup = this.formBuilder.group({
        //     recaptcha: ['', Validators.required]
        // });
        this.maxAllowedDate.setDate(this.maxAllowedDate.getDate() - 6);
        this.maxAllowedDate.setFullYear(this.maxAllowedDate.getFullYear() - 2);
        if (!this.application) {
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
    }
    getLevels() {
        if (this.levels.length > 0) return;
        this.applicationService.getLevels().subscribe(
            (res: any) => {
                this.levels = res;
            }
        )
    }
    getStatuses() {
        if (this.statuses.length > 0) return;
        this.statusesService.getStatuses().subscribe(
            (res: any) => {
                this.statuses = res;
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
        if (this.application) {
            application['application']['status_id'] = this.selectedStatus;
            application['application']['application_fees'] = this.selectedApplicationFees;
            application['application']['tuition_fees'] = this.selectedTuitionFees;
        }
        this.submit.emit(application);
    }
    setApplicationValues() {
        this.getStatuses();
        this.selectedStatus = this.application.status_id;
        this.getLevels();
        this.selectedLevel = this.application.level_id;
        this.selectedApplicationFees = this.application.application_fees;
        this.selectedTuitionFees = this.application.tuition_fees;
        this.applicant = {
            firstName: this.application.applicant.first_name,
            lastName: this.application.applicant.last_name,
            birthDate: this.application.applicant.birth_date,
            birthCity: this.application.applicant.birth_city,
            birthCountry: this.application.applicant.birth_country,
            primaryAddress: this.application.applicant.primary_address,
            secondaryAddress: this.application.applicant.secondary_address,
            mobileNumber: this.application.applicant.mobile_number,
            landline: this.application.applicant.landline,
            emailAddress: this.application.applicant.email
        }
        this.guardians = [];
        for (let i = 0; i < this.application.applicant.guardians.length; i++) {
            const guardian = this.application.applicant.guardians[i];
            this.guardians.push({
                form: this.formBuilder.group({
                    'name': [guardian.name, [Validators.required]],
                    'relation': [guardian.relation, [Validators.required]],
                    'primary_address': [guardian.primary_address, []],
                    'secondary_address': [guardian.secondary_address, []],
                    'mobile_number': [guardian.mobile_number, [Validators.required]],
                    'email': [guardian.email, [Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/), Validators.required]]
                }),
                isSubmitted: false
            })
        }
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
