import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from "./order/order.component";

export const RoutedComponents: Routes = [
    {
        path: '',
        component: OrderComponent,
        // canDeactivate: [LeaveOrderGuards]
    }
]

@NgModule({
    declarations: [
        OrderComponent
    ],
    imports: [
        RouterModule
    ],
    exports: [
        RouterModule,
        OrderComponent
    ],
})

export class ComponentsRoutingModule {
}

export const Components = [
    OrderComponent,
]