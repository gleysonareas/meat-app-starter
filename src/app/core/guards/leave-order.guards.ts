import { OrderComponent } from '../../order/order.component';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class LeaveOrderGuards implements CanDeactivate<OrderComponent> {
    // Consider using this interface for all CanDeactivate guards,
    // and have your components implement this interface, too.
    //
    //   e.g. export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    //
    // export interface CanComponentDeactivate {
    // canDeactivate: () => any;
    // }
    canDeactivate(
        orderComponent: OrderComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!orderComponent.isOrderCompleted()) {
            return window.confirm('Deseja desistir da compora?')
        } else {
            return true;
        }
    }
}