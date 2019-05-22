import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-applicants',
    templateUrl: './applicants.component.html',
    styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent implements OnInit {

    columns = [
        {
            columnDef: 'level', header: 'Level', cell: (element: any) => {
                return {
                    label: element.level.label,
                    id: element.level.id
                }
            },
            total: element => `Total`
        },
        { columnDef: 'number', header: 'No. of Applicants', cell: (element: any) => element.number,  total: element => this.getTotal(element)},
        { columnDef: 'pending', header: 'Pending', cell: (element: any) => element.pending, total: element => this.getTotal(element)},
        { columnDef: 'allotted', header: 'Allotted', cell: (element: any) => element.allotted, total: element => this.getTotal(element)},
        { columnDef: 'discarded', header: 'Discarded', cell: (element: any) => element.discarded, total: element => this.getTotal(element)},
        { columnDef: 'assessment', header: 'Assessment', cell: (element: any) => element.assessment, total: element => this.getTotal(element)},
        { columnDef: 'accepted', header: 'Accepted', cell: (element: any) => element.accepted, total: element => this.getTotal(element)},
        { columnDef: 'registed', header: 'Registed', cell: (element: any) => element.registed, total: element => this.getTotal(element)},
        { columnDef: 'refund', header: 'Re-Fund', cell: (element: any) => element.refund, total: element => this.getTotal(element)},
        { columnDef: 'next', header: 'Next Year', cell: (element: any) => element.next, total: element => this.getTotal(element)},
    ];

    displayedColumns = this.columns.map(c => c.columnDef);
    dataSource = [
        {
            level: {
                label: 'CLA 180',
                id: '2'
            },
            number: 455,
            pending: 5,
            allotted: 44,
            discarded: 20,
            assessment: 3,
            accepted: 300,
            registed: 10,
            refund: 5,
            next: 45
        },
        {
            level: {
                label: 'CLA 180',
                id: '2'
            },
            number: 455,
            pending: 5,
            allotted: 44,
            discarded: 20,
            assessment: 3,
            accepted: 300,
            registed: 10,
            refund: 5,
            next: 45
        },
        {
            level: {
                label: 'CLA 180',
                id: '2'
            },
            number: 455,
            pending: 5,
            allotted: 44,
            discarded: 20,
            assessment: 3,
            accepted: 300,
            registed: 10,
            refund: 5,
            next: 45
        },
        {
            level: {
                label: 'CLA 180',
                id: '2'
            },
            number: 455,
            pending: 5,
            allotted: 44,
            discarded: 20,
            assessment: 3,
            accepted: 300,
            registed: 10,
            refund: 5,
            next: 45
        },
        {
            level: {
                label: 'CLA 180',
                id: '2'
            },
            number: 455,
            pending: 5,
            allotted: 44,
            discarded: 20,
            assessment: 3,
            accepted: 300,
            registed: 10,
            refund: 5,
            next: 45
        },
        {
            level: {
                label: 'CLA 180',
                id: '2'
            },
            number: 455,
            pending: 5,
            allotted: 44,
            discarded: 20,
            assessment: 3,
            accepted: 300,
            registed: 10,
            refund: 5,
            next: 45
        },
        {
            level: {
                label: 'CLA 180',
                id: '2'
            },
            number: 455,
            pending: 5,
            allotted: 44,
            discarded: 20,
            assessment: 3,
            accepted: 300,
            registed: 10,
            refund: 5,
            next: 45
        },
    ];
    constructor() { }

    ngOnInit() {
    }
    getTotal(element) {
        return this.dataSource.map(t => t[element]).reduce((acc, value) => acc + value, 0);
    }

}
