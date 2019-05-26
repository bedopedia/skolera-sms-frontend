import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-student-admission',
    templateUrl: './student-admission.component.html',
    styleUrls: ['./student-admission.component.scss']
})
export class StudentAdmissionComponent implements OnInit {

    currentStep = 1;
    constructor() { }
    countries = ['Egypt'];
    @ViewChild('applicationAttributesForm') applicationAttributesForm: NgForm;
    ngOnInit() {

    }
    changeStep(step) {
        this.currentStep = step;
    }
    // {
    //     "application": {
    //         "status": "test",
    //         "application_fees": 14,
    //         "tuition_fees": 33,
    //         "applicant_attributes": {
    //             "first_name": "amr",
    //             "last_name": "adel",
    //             "birth_date": "2015-12-08",
    //             "mobile_number": "23234",
    //             "landline": "",
    //             "email": "student@gmail.com",
    //             "birth_country": "Egypt",
    //             "birth_city": "Giza",
    //             "primary_address": "Imbaba",
    //             "secondary_address": "lewa",
    //             "guardians_attributes": [
    //                 {
    //                     "name": "khalil",
    //                     "relation": "Parent",
    //                     "primary_address": "Imbaba",
    //                     "secondary_address": "lewa",
    //                     "mobile_number": "01112442424",
    //                     "email": "parent@gmail.com"
    //                 }	
    //             ]
    //         }
    //     }
    // }

    OnApplicationAttributesSubmit() {
        console.log(this.applicationAttributesForm.value)
    }
}
