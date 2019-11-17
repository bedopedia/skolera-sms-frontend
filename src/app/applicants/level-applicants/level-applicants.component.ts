import { Component, OnInit } from '@angular/core';
import { ApplicationService } from '@skolera/services';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { ExcelService } from '@skolera/services/export.service';

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
    dataSource = [];
 
    constructor(
        private applicationService: ApplicationService,
        private route: ActivatedRoute,
        private datePipe: DatePipe,
        private excelService: ExcelService
    ) { }

    ngOnInit() {
        this.getLevelApplicants();
    }


    getLevelApplicants() {
        this.route.params.subscribe(
            params => {
                this.applicationService.getLevelApplicants(params.id).subscribe(
                    (res: any) => {
                        this.dataSource = res.map(applicant => {
                            return {
                                name: `${applicant.applicant.first_name} ${applicant.applicant.last_name}`,
                                id: applicant.applicant.application_id,
                                date: this.datePipe.transform(applicant.created_at, 'MMMM d, y'),
                                applicationFees: applicant.application_fees? 'Paid' : 'Not Paid',
                                tuitionFees: applicant.tuition_fees? 'Paid' : 'Not Paid',
                            }
                        })
                        
                        
                    }
                )
            }
        )

    }

    exportExcel() {

        let excellDta = {
            title: " Applicant Registration",
            header: [['Name of student', 'Date of Application', 'Application fees', 'Tuition Fees']],
            fileName: "Applicant Registration EXCELL",
            data: []
        }
        this.dataSource.forEach((data, index) => {
            excellDta.data.push(
                [data.name, data.date, data.applicationFees, data.tuitionFees]
            ) 
        })
       
        this.excelService.generateExcel(excellDta);


    }
}
