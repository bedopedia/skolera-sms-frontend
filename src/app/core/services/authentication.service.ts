
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService {

    currentUser;
    sessionHeaders;
    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    login(username: string, password: string) {
        
    }
    logout() {
        localStorage.clear();
        this.router.navigate(['login']);
    }
    resetHeaders(){
        this.sessionHeaders = {
            'Access-Control-Allow-Origin': '*',
        };
        localStorage.setItem('sessionHeaders', JSON.stringify(this.sessionHeaders));
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    getSessionHeader() {
        return JSON.parse(localStorage.getItem('sessionHeaders'));
    }
}
