import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'admission-previous-fees',
    templateUrl: './admission-previous-fees.component.html',
    styleUrls: ['./admission-previous-fees.component.scss']
})
export class AdmissionPreviousFeesComponent implements OnInit {

    repeater = [1,2,3,4,5,6]
    constructor() { }

    ngOnInit() {
    }

}
