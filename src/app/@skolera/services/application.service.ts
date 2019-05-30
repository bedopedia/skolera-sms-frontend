import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplicationService {

    constructor(
        private http: HttpClient
    ) { }
    addStudent(student) {
        return this.http.post(`https://cisregister.skolera.com/api/v1/applications`,student);
    }
    getLevels() {
        return this.http.get(`https://cisregister.skolera.com/api/v1/levels`);
    }
}
