import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-student-admission',
    templateUrl: './student-admission.component.html',
    styleUrls: ['./student-admission.component.scss']
})
export class StudentAdmissionComponent implements OnInit {

    currentStep = 1;
    constructor() { }

    ngOnInit() {

    }
    changeStep(step) {
        this.currentStep = step;
    }
}
