import { Component, OnInit } from '@angular/core';
import { StatusesService } from '@skolera/services';
import { SkoleraConfirmationComponent } from '@shared/skolera-confirmation/skolera-confirmation.component';
import { MatDialog } from '@angular/material';
import { SkoleraEditComponent } from '@shared/skolera-edit/skolera-edit.component';

@Component({
    selector: 'app-statuses',
    templateUrl: './statuses.component.html',
    styleUrls: ['./statuses.component.scss']
})
export class StatusesComponent implements OnInit {

    statuses = [];
    statusInput = '';
    constructor(
        private statusesService: StatusesService,
        public dialog: MatDialog,
    ) { }

    ngOnInit() {
        this.getStatuses();
    }
    getStatuses() {
        this.statusesService.getStatuses().subscribe(
            (res: any) => this.statuses = res
        )
    }
    addStatus() {
        if (this.statusInput == '') return;
        let status = {
            "status": {
                "name": this.statusInput
            }
        }
        this.statusesService.addStatus(status).subscribe(
            res => {
                this.getStatuses();
                this.statusInput = '';
            }
        )
    }
    deleteStatus(id) {
        let dialogRef = this.dialog.open(SkoleraConfirmationComponent, {
            width: '450px',
            data: {
                title: 'Are you sure you want to delete this status?',
                buttons: [
                    {
                        label: 'Cancel',
                        actionCallback: 'cancel',
                        type: 'btn-secondary'
                    },
                    {
                        label: 'Delete',
                        actionCallback: 'delete',
                        type: 'btn-danger'
                    }
                ]
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result != 'delete') return;
            this.statusesService.deleteStatus(id).subscribe(
                res => {
                    this.getStatuses();
                }
            )
        })
    }
    editStatus(status) {
        let dialogRef = this.dialog.open(SkoleraEditComponent, {
            width: '550px',
            data: {
                title: 'Edit Status',
                editInput: status.name
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (!result || status.name == result) return;
            let params = {
                "status": {
                    "name": result
                }
            }
            this.statusesService.editStatus(status.id, params).subscribe(
                res => this.getStatuses()
            )
        })
    }
}
