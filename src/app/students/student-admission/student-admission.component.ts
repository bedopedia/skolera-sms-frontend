import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '@skolera/services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-student-admission',
    templateUrl: './student-admission.component.html',
    styleUrls: ['./student-admission.component.scss']
})
export class StudentAdmissionComponent implements OnInit {

    isSubmitting = false;
    constructor(
        private applicationService: ApplicationService,
        private router: Router
    ) { }
    ngOnInit() {
        
    }
    
    createStudent(application) {
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