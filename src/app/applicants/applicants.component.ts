import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApplicationService, StatusesService } from '@skolera/services';

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
    isLoading = true;
    @ViewChild('tableHead') tableHead: ElementRef
    @ViewChild('tableBody') tableBody: ElementRef
    constructor(
        private applicationService: ApplicationService,
        private statusesService: StatusesService
    ) { }

    ngOnInit() {
        this.getStatuses();
    }
    getStatuses() {
        this.statusesService.getStatuses().subscribe(
            (res: any) => {
                this.statuses = res;
                for (let i = 0; i < this.statuses.length; i++) {
                    const status = this.statuses[i];
                    this.columns.push(
                        {
                            columnDef: `${status.id}`,
                            header: status.name,
                            cell: (element: any) => element[status.id],
                            total: element => this.getTotal(element)
                        }
                    )
                }
                this.getLevelsReport();
            }
        )
    }
    getLevelsReport() {
        this.applicationService.getLevelsReport().subscribe(
            (res: any) => {
                this.getLevels(res);
            }
        )
    }
    getLevels(apiLevels) {
        let levels = [];
        this.applicationService.getLevels().subscribe(
            (res: any) => {
                levels = res;
                for (let i = 0; i < levels.length; i++) {
                    const level = levels[i];
                    let apiLevel = [];
                    apiLevel = apiLevels.levels[0].filter(le => le.level_id == level.id)
                    let row = {
                        level: {
                            label: level.name,
                            id: level.id
                        },
                        number: apiLevel.length > 0 ? apiLevel[0].applicants_count : 0,
                    }
                    for (let j = 0; j < this.statuses.length; j++) {
                        const status = this.statuses[j];
                        let apiStatus = [];
                        if (apiLevel.length > 0) {
                            apiStatus = apiLevel[0].status[0].filter(st => st.status_id == status.id)
                        } else {
                            apiStatus = [];
                        }
                        row[status.id] = apiStatus.length > 0 ? apiStatus[0].applicants_count : 0
                    }
                    this.dataSource.push(row)
                    this.displayedColumns = this.columns.map(c => c.columnDef);
                }
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
    scrollPrevNext(sign){
        this.tableBody.nativeElement.scrollLeft += sign * 100;
        this.tableHead.nativeElement.scrollLeft += sign * 100;
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
