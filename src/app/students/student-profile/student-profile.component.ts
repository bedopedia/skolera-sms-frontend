import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from '@skolera/services';

@Component({
    selector: 'app-student-profile',
    templateUrl: './student-profile.component.html',
    styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private applicationService: ApplicationService
    ) { }

    ngOnInit() {
        this.getProfileDetails();
    }
    getProfileDetails() {
        this.route.params.subscribe(
            params => {
                this.applicationService.getStudent(params.id).subscribe(
                    (res: any) => {
                        console.log(res)
                    }
                )
            }
        )
    }
}
