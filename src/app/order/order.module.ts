import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SharedsModule } from "../shared/shared.module";

import { LeaveOrderGuards } from '../core/guards/leave-order.guards';

import { OrderComponent } from "./order.component";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";


const ROUTES: Routes = [
  { path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuards] },
]

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemsComponent,
    DeliveryCostsComponent,
  ],
  imports: [
    SharedsModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [OrderComponent]
})

export class OrderModule { }