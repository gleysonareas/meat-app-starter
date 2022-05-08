import { LoginService } from '../services/login.service';
import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService) { }

    checkAuthentication(path: string): boolean {
        const loggedIn = this.loginService.isLoggedIn()
        if (!loggedIn) {
            this.loginService.handleLogin(`/${path}`)
        }
        return loggedIn
    }

    canLoad(route: Route): boolean {
        //console.log('canLoad')
        return this.checkAuthentication(route.path)
    }

    canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean {
        //console.log('canActivate')
        return this.checkAuthentication(activatedRoute.routeConfig.path)
    }

}