import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApplicationService, StatusesService } from '@skolera/services';
import { ExcelService } from '@skolera/services/export.service';

@Component({
    selector: 'app-applicants',
    templateUrl: './applicants.component.html',
    styleUrls: ['./applicants.component.scss']
})
export class ApplicantsComponent implements OnInit {

    columns = this.columns = [
        {
            columnDef: 'level', header: 'Level', cell: (element: any) => {
                return {
                    label: element.level.label,
                    id: element.level.id
                }
            },
            total: element => `Total`
        },
        {
            columnDef: 'number',
            header: 'No. of Applicants',
            cell: (element: any) => element.number,
            total: element => this.getTotal(element)
        }
    ];
    displayedColumns = null;
    dataSource = [];
    statuses = [];
    tableData:any;
    isLoading = true;
    @ViewChild('tableHead') tableHead: ElementRef
    @ViewChild('tableBody') tableBody: ElementRef
    constructor(
        private applicationService: ApplicationService,
        private statusesService: StatusesService,
        private excelService: ExcelService
    ) { }

    ngOnInit() {
        this.getLevelsReport();
    }
    getLevelsReport() {
        this.applicationService.getLevelsReport().subscribe(
            (res: any) => {
                for (let i = 0; i < res.applicants_total_count.per_statuses.length; i++) {
                    const status = res.applicants_total_count.per_statuses[i];
                    this.columns.push(
                        {
                            columnDef: `${status.id}`,
                            header: status.name,
                            cell: (element: any) => element[status.id],
                            total: element => this.getTotal(element)
                        }
                    )
                }
                let levels = res.levels;
                console.log("res",res);
                this.tableData = res;
                
                for (let i = 0; i < levels.length; i++) {
                    const level = levels[i];
                    let row = {
                        level: {
                            label: level.name,
                            id: level.id
                        },
                        number: level.applicants_count,
                    }
                    for (let j = 0; j < res.applicants_total_count.per_statuses.length; j++) {
                        const status = res.applicants_total_count.per_statuses[j];
                        let apiStatus: any = [];
                        apiStatus = level.statuses.filter(object => object.id == status.id)
                        let statusIds = level.statuses.map(status => status.id)
                        row[status.id] = statusIds.includes(status.id) ? apiStatus[0].applicants_count : 0
                    }
                    this.dataSource.push(row)
                    this.displayedColumns = this.columns.map(c => c.columnDef);
                    
                }
                console.log("displayedColumns",this.dataSource);
                
                this.showTable();
            }
        )
    }
    showTable() {
        this.isLoading = false;
    }
    getTotal(element) {
        return this.dataSource.map(t => t[element]).reduce((acc, value) => acc + value, 0);
    }
    scrollPrevNext(sign) {
        this.tableBody.nativeElement.scrollLeft += sign * 100;
        this.tableHead.nativeElement.scrollLeft += sign * 100;
    }
    exportExcel(){
        console.log("this.colums", this.tableData);
        
        let excellDta = {
            title: " Applicants",
            header: [],
            fileName:"ApplicantsEXCELL",
            data: []
        }

         excellDta.header[0]= ['LEVEL']
         excellDta.header[0].push ('NO. OF APPLICANTS')

         this.tableData.applicants_total_count.per_statuses.forEach(status => {
            excellDta.header[0].push(status.name)
         });
        //  for (let index = 0; index <  this.tableData.applicants_total_count.per_statuses.length; index++) {
        //     this.tableData.applicants_total_count.per_statuses
        //     excellDta.header[0].push(status.name)
        //  }
         for (let index = 0; index <  this.tableData.levels.length; index++) {
             console.log(index,this.tableData.levels[index].name);
             excellDta.data[index] = [this.tableData.levels[index].name]
             
            // excellDta.data[index].push(this.tableData.levels[index].name)
             
         }




        //  for (let i = 0; i < this.categories.length; i++) {
        //     if(this.categories[i].sub_categories.length == 0){
        //         for (let j = 0; j < this.categories[i].items.length; j++) {
        //             excellDta.header[0].push(this.categories[i].name)
        //             excellDta.header[1].push(this.categories[i].items[j].item_type + "(Max grade:"+this.categories[i].items[j].max_grade + ")" )
        //             excellDta.header[2].push('')
        //         }
        //     }
        //     else{
        //         for (let k = 0; k < this.categories[i].sub_categories.length; k++) {
        //             excellDta.header[0].push(this.categories[i].name)

        //             for (let index = 0; index < this.categories[i].sub_categories[k].items.length; index++) {
        //                 excellDta.header[1].push(this.categories[i].sub_categories[k].name )
        //                 excellDta.header[2].push(this.categories[i].sub_categories[k].items[index].item_type + "(Max grade:"+this.categories[i].sub_categories[k].items[index].max_grade + ")" )
        //             }
        //         }
        //         for (let index2 = 0; index2 < this.categories[i].items.length; index2++) {
        //             excellDta.header[2].push(this.categories[i].items[index2].item_type + "(Max grade:"+this.categories[i].items[index2].max_grade + ")" )
        //         }
        //     }

        //  }

        // for (let i = 0; i < this.students.length; i++) {
        //     excellDta.data[i]= [this.students[i].name]
        //     for (let j = 0; j < this.students[i].submissions.length; j++) {
        //      excellDta.data[i].push(this.students[i].submissions[j].grade)
        //     }
        //  }

        this.excelService.generateExcel(excellDta);

    }
    printTable() {
        let tableElement = this.tableBody.nativeElement;
        let table = document.createElement('table');
        table.style.width = '100%';
        table.style.textAlign = 'left';
        table.setAttribute('border', '1');
        let thead = document.createElement('thead');
        table.appendChild(thead);
        let tr = document.createElement('tr');
        thead.appendChild(tr);
        let tableHeader = tableElement.querySelectorAll('.mat-header-cell');
        for (let i = 0; i < tableHeader.length; i++) {
            let th = document.createElement('th');
            th.innerHTML = tableHeader[i].innerHTML.replace(/<.*?>/g, '');
            tr.append(th)
        }
        let tableData = tableElement.querySelectorAll('.mat-row');
        let tbody = document.createElement('tbody');
        for (let i = 0; i < tableData.length; i++) {
            let tr = document.createElement('tr');
            let row = tableData[i].querySelectorAll('.mat-cell');
            for (let j = 0; j < row.length; j++) {
                let td = document.createElement('td');
                td.innerHTML = row[j].innerHTML.replace(/<.*?>/g, '');
                tr.appendChild(td)
            }
            tbody.appendChild(tr);
        }
        tableData = tableElement.querySelectorAll('.mat-footer-row');
        for (let i = 0; i < tableData.length; i++) {
            let tr = document.createElement('tr');
            let row = tableData[i].querySelectorAll('.mat-footer-cell');
            for (let j = 0; j < row.length; j++) {
                let td = document.createElement('td');
                td.innerHTML = row[j].innerHTML.replace(/<.*?>/g, '');
                tr.appendChild(td)
            }
            tbody.appendChild(tr);
        }
        table.appendChild(tbody);
        let popupWindow = window.open('');
        popupWindow.document.write(table.outerHTML);
        popupWindow.stop();
        popupWindow.print();
    }
}
