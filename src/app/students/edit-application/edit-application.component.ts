import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApplicationService } from '@skolera/services';

@Component({
    selector: 'app-edit-application',
    templateUrl: './edit-application.component.html',
    styleUrls: ['./edit-application.component.scss']
})
export class EditApplicationComponent implements OnInit {

    showEditForm = false;
    application: any = null;
    isSubmitting = false;
    id = null
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private applicationService: ApplicationService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(
            params => {
                this.applicationService.getStudent(params.id).subscribe(
                    (res: any) => {
                        this.id = params.id;
                        this.application = res;
                        this.showEditForm = true;
                    }
                )
            }
        )
    }
    editApplicationSubmit(application) {
        this.isSubmitting = true;
        this.applicationService.editStudent(this.id, application).subscribe(
            res => {
                this.router.navigate(['students/profile/' + this.id]);
            },
            err => {
                this.isSubmitting = false;
            }
        );
    }

}
