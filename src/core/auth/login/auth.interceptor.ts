import { LoginService } from './../../services/login.service';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const loginService = this.injector.get(LoginService)
        if (loginService.isLoggedIn()) {
            const authRequest = request.clone({setHeaders:{'Authorization':`Bearer ${loginService.user.accessToken}`}})
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