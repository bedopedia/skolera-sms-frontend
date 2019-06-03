import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService, StatusesService } from '@skolera/services';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-student-profile',
    templateUrl: './student-profile.component.html',
    styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

    application: any = {
        applicant: {
            application_id: null,
            birth_city: '',
            birth_country: '',
            birth_date: '',
            created_at: '',
            email: '',
            first_name: '',
            guardians: [],
            id: 2,
            landline: '',
            last_name: '',
            mobile_number: '',
            primary_address: '',
            secondary_address: '',
            updated_at: '',
            username: null
        },
        application_fees: null,
        created_at: '',
        id: null,
        level_id: null,
        school_id: null,
        status_id: null,
        tuition_fees: null,
        updated_at: ''
    }
    applicationData = [];
    applicantName = '';
    statusName = '';
    guardians = [];
    constructor(
        private route: ActivatedRoute,
        private applicationService: ApplicationService,
        private datePipe: DatePipe,
        private statusesService: StatusesService
    ) { }

    ngOnInit() {
        this.getProfileDetails();
    }
    getProfileDetails() {
        this.route.params.subscribe(
            params => {
                this.applicationService.getStudent(params.id).subscribe(
                    (res: any) => {
                        this.applicantName = res.applicant.first_name + ' ' + res.applicant.last_name;
                        this.guardians = res.applicant.guardians;
                        this.getStatus(res.status_id);
                        this.applicationData = [
                            {
                                key: 'Application Fees',
                                value: res.applicant.application_fees ? 'Paid' : 'Not Paid'
                            },
                            {
                                key: 'Tuition Fees',
                                value: res.applicant.tuition_fees ? 'Paid' : 'Not Paid'
                            },
                            {
                                key: 'Username',
                                value: res.applicant.username
                            },
                            {
                                key: 'E-mail Address',
                                value: res.applicant.email
                            },
                            {
                                key: 'Date Of Birth',
                                value: this.datePipe.transform(res.applicant.birth_date, 'MMMM d, y')
                            },
                            {
                                key: 'Age On October 1st',
                                value: this.calculateAge(new Date(res.applicant.birth_date)) + ' Years'
                            },
                            {
                                key: 'Country Of Birth',
                                value: res.applicant.birth_country
                            },
                            {
                                key: 'City Of Birth',
                                value: res.applicant.birth_city
                            },
                            {
                                key: 'Date Of Application',
                                value: this.datePipe.transform(res.created_at, 'MMMM d, y')
                            },
                            {
                                key: 'Phone Number',
                                value: res.applicant.mobile_number
                            },
                            {
                                key: 'Address 1',
                                value: res.applicant.primary_address
                            },
                            {
                                key: 'Address 2',
                                value: res.applicant.secondary_address
                            },
                            {
                                key: 'Landline',
                                value: res.applicant.landline
                            }
                        ]
                    }
                )
            }
        )
    }
    calculateAge(dob) {
        let dateOnOctober: any = new Date();
        dateOnOctober.setDate(1);
        dateOnOctober.setMonth(9);
        let difference = dateOnOctober - dob;
        let ageDate = new Date(difference);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
    getStatus(id) {
        this.statusesService.getStatus(id).subscribe(
            (res: any) => {
                this.statusName = res.name
            }
        )
    }
}
