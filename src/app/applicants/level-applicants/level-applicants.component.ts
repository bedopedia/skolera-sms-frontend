import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-level-applicants',
    templateUrl: './level-applicants.component.html',
    styleUrls: ['./level-applicants.component.scss']
})
export class LevelApplicantsComponent implements OnInit {

    columns = [
        {
            columnDef: 'name', header: 'Name of student', cell: (element: any) => {
                return {
                    label: element.name,
                    id: element.id
                }
            }
        },
        { columnDef: 'date', header: 'Date of Application', cell: (element: any) => element.date },
        { columnDef: 'applicationFees', header: 'Application fees', cell: (element: any) => element.applicationFees },
        { columnDef: 'tuitionFees', header: 'Tuition Fees', cell: (element: any) => element.tuitionFees }
    ];

    displayedColumns = this.columns.map(c => c.columnDef);
    dataSource = [
        {
            name: 'Mariam Ahmed Baraka',
            id: 3,
            date: '30/12/2018',
            applicationFees: 'Paid',
            tuitionFees: 'Not Paid',
        },
        {
            name: 'Mariam Ahmed Baraka',
            id: 3,
            date: '30/12/2018',
            applicationFees: 'Paid',
            tuitionFees: 'Not Paid',
        },
        {
            name: 'Mariam Ahmed Baraka',
            id: 3,
            date: '30/12/2018',
            applicationFees: 'Paid',
            tuitionFees: 'Not Paid',
        },
        {
            name: 'Mariam Ahmed Baraka',
            id: 3,
            date: '30/12/2018',
            applicationFees: 'Paid',
            tuitionFees: 'Not Paid',
        },
        {
            name: 'Mariam Ahmed Baraka',
            id: 3,
            date: '30/12/2018',
            applicationFees: 'Paid',
            tuitionFees: 'Not Paid',
        },
        {
            name: 'Mariam Ahmed Baraka',
            id: 3,
            date: '30/12/2018',
            applicationFees: 'Paid',
            tuitionFees: 'Not Paid',
        },
        {
            name: 'Mariam Ahmed Baraka',
            id: 3,
            date: '30/12/2018',
            applicationFees: 'Paid',
            tuitionFees: 'Not Paid',
        },
        {
            name: 'Mariam Ahmed Baraka',
            id: 3,
            date: '30/12/2018',
            applicationFees: 'Paid',
            tuitionFees: 'Not Paid',
        },
    ];
    constructor() { }

    ngOnInit() {
    }
}
