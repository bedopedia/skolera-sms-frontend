import { Component, OnInit, ViewChild, Input, EventEmitter, Output } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
    selector: 'guardian-form',
    templateUrl: './guardian-form.component.html',
    styleUrls: ['./guardian-form.component.scss']
})
export class GuardianFormComponent implements OnInit {

    guardianForm: FormGroup;

    @Input() isSubmitted: boolean = false;
    @Input() form: FormGroup;
    @Output() formChange = new EventEmitter();
    relations = [
        'Father',
        'Mother',
        'Other'
    ]
    constructor() { }
    ngOnInit() {
        this.guardianForm = this.form
        this.guardianForm.valueChanges.subscribe(
            result => this.formChange.emit(this.guardianForm)
        );
    }

}
