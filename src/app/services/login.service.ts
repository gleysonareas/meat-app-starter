import { Router } from '@angular/router';
import { UserModelType } from './../types/user.model.type';
import { MEAT_API } from './../app.api';
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()

export class LoginService {

    user: UserModelType

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) { }

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    login(email: string, password: string): Observable<any> {
        return this.httpClient
            .post<UserModelType>(`${MEAT_API}/login`, { email: email, password: password })
            .do(user => this.user = user)
    }
    handleLogin(path?: string) {
        this.router.navigate(['/login', path])
    }

}