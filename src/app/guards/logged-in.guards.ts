import { LoginService } from './../services/login.service';
import { Injectable } from "@angular/core";
import { CanLoad, Route, UrlSegment, UrlTree, CanActivate,  ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class LoggedInGuard implements CanLoad {

    constructor(private loginService: LoginService) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        const loggedIn = this.loginService.isLoggedIn()
        if (!loggedIn) {
            this.loginService.handleLogin(`/${route.path}`)
        }
        return loggedIn
        console.log(route)
        return false
    }

}