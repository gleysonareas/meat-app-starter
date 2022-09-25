import { NavigationEnd, Router } from '@angular/router';
import { UserModel } from '../../shared/models/user.model';
import { MEAT_API } from '../../app.api';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, filter } from 'rxjs/operators';
// import 'rxjs/add/operator/filter'
// import 'rxjs/add/operator/do'

@Injectable()

export class LoginService {

    public user?: UserModel = {} as UserModel
    public lastUrl: string = '';

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) {
        this.router.events
            .pipe(filter(e => e instanceof NavigationEnd))
            // .subscribe((e: NavigationEnd) => /*console.log*/this.lastUrl = e.url)
    }

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    login(email: string, password: string): Observable<any> {
        return this.httpClient
            .post<UserModel>(`${MEAT_API}/login`, { email: email, password: password })
            .pipe(tap(user => this.user = user))
    }

    logout() {
        this.user = undefined
    }

    handleLogin(path: string = this.lastUrl) {
        this.router.navigate(['/login', btoa(path)]) //Aqui é feito o encode
    }

}