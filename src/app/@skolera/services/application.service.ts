import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApplicationService {

    constructor(
        private http: HttpClient
    ) { }
    addStudent(student) {
        return this.http.post(`http://cisregister.skolera.com/api/v1/applications`,student, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
