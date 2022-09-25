import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';

import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService)
        if (loginService.isLoggedIn()) {
            /* A requisição é imutavel, ou seja, não da para altera-la. Entao é necessario criar um clone para setar as informações */
            const authRequest = request.clone({ setHeaders: { 'Authorization': `Bearer ${loginService.user?.accessToken}` } })
            return next.handle(authRequest)
        } else {
            return next.handle(request)
        }

        /*
        let headers = new HttpHeaders()
        if(this.loginService.isLoggedIn()){
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)//Dessa forma é passada a autorização
        }
        */

        // console.log('intercepting', request)
        // return next.handle(request)
    }
}