import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable()
export class ApplicationService {

    constructor(
        private http: HttpClient
    ) { }
    addStudent(student) {
        return this.http.post(`${baseUrl}/api/v1/applications`,student);
    }
    getStudent(id) {
        return this.http.get(`${baseUrl}/api/v1/applications/${id}`);
    }
    getLevels() {
        return this.http.get(`${baseUrl}/api/v1/levels`);
    }
    getLevelApplicants(levelId) {
        return this.http.get(`${baseUrl}/api/v1/applications`, {
            params: {
                level_id: levelId
            }
        });
    }
}
