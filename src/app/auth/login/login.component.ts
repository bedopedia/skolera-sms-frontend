import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService } from '@core/services';
import { NgForm } from '@angular/forms';
import { Globals } from '@core/globals';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    @ViewChild('loginForm') loginForm: NgForm;
    invalidCredentials = false;
    sessionHeaders = {};
    isSubmitting = false;
    constructor(
        private authenticationService: AuthenticationService,
        public globals: Globals,
        private router: Router
    ) { }

    ngOnInit() {
    }
    login() {
        if (this.loginForm.invalid) return;
        this.invalidCredentials = false;
        this.isSubmitting = true;
        this.authenticationService.login(
            this.loginForm.value.email,
            this.loginForm.value.password
        ).subscribe(
            (res: any) => {
                this.sessionHeaders = {
                    'access-token': res.headers.get('access-token'),
                    'client': res.headers.get('client'),
                    'uid': res.headers.get('uid')
                }
                this.isSubmitting = false;
                localStorage.setItem('sessionHeaders', JSON.stringify(this.sessionHeaders));
                localStorage.setItem('currentUser', JSON.stringify(res.body.data));
                this.globals.currentUser = res.body.data;
                this.router.navigate(['/applicants']);
            },
            err => {
                this.invalidCredentials = true;
                this.isSubmitting = false;
            }
        )
    }

}
