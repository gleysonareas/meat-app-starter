import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { InputComponent } from './input/input.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';
import { RadioComponent } from './radio/radio.component';
import { RatingComponent } from './rating/rating.component';
import { MenuItemComponent } from './restaurant/restaurant-detail/menu/menu-item/menu-item.component';
import { MenuComponent } from './restaurant/restaurant-detail/menu/menu.component';
import { RestaurantDetailComponent } from './restaurant/restaurant-detail/restaurant-detail.component';
import { ReviewsComponent } from './restaurant/restaurant-detail/reviews/reviews.component';
import { ShoppingCartComponent } from './restaurant/restaurant-detail/shopping-cart/shopping-cart.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { Components, ComponentsRoutingModule } from './components-routing.module';

@NgModule({
  declarations: [
    ...Components,
    InputComponent,
    SnackbarComponent,
    RadioComponent,
    RatingComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    UserDetailComponent,
  ],
  imports: [
    ComponentsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    ComponentsRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    InputComponent,
    SnackbarComponent,
    RadioComponent,
    RatingComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    MenuItemComponent,
    ShoppingCartComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    UserDetailComponent,
  ],
})
export class ComponentsModule { }
