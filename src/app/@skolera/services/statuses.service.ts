import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';

@Injectable()
export class StatusesService {

    constructor(
        private http: HttpClient
    ) { }
    getStatuses() {
        return this.http.get(`${baseUrl}/api/v1/statuses`);
    }
    getStatus(id) {
        return this.http.get(`${baseUrl}/api/v1/statuses/${id}`);
    }
    addStatus(status) {
        return this.http.post(`${baseUrl}/api/v1/statuses`, status);
    }
    deleteStatus(id) {
        return this.http.delete(`${baseUrl}/api/v1/statuses/${id}`);
    }
    editStatus(id, status) {
        return this.http.put(`${baseUrl}/api/v1/statuses/${id}`, status);
    }
}
