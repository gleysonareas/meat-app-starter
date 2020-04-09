import { NgModule, ModuleWithProviders } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { RestaurantsService } from './../restaurants/restaurants.service';
import { OrderService } from './../order/order.service';
import { ShoppingCartService } from './../restaurant-detail/shopping-cart/shopping-cart.service';
import { NotificationService } from './messages/notification.service'

@NgModule({
    declarations: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [InputComponent, RadioComponent, RatingComponent, SnackbarComponent, CommonModule, ReactiveFormsModule, FormsModule],
})

export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [ShoppingCartService, OrderService, RestaurantsService, NotificationService], //aqui foram feitas as declarações dos providers. 
        }
    }
}

//Dessa maneira que configuramos o shared module
//Aqui utilizamos o MWP para configurar o shared module de forma que ele realize o carregamento dos providers tbm.