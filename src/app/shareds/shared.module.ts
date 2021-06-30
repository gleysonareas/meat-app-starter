import { NgModule, ModuleWithProviders } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from "@angular/common";

import { RatingComponent } from './rating/rating.component';
import { RadioComponent } from './radio/radio.component';
import { InputComponent } from './input/input.component';
import { SnackbarComponent } from './messages/snackbar/snackbar.component';

import { RestaurantsService } from '../services/restaurants.service';
import { OrderService } from '../services/order.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { NotificationService } from '../services/notification.service'
import { LoginService } from "app/services/login.service";
import { LoggedInGuard } from "app/guards/logged-in.guards";

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent,
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
})

export class SharedsModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: SharedsModule,
            providers: [
                ShoppingCartService,
                OrderService,
                RestaurantsService,
                NotificationService,
                LoginService,
                LoggedInGuard
            ], //aqui foram feitas as declarações dos providers. 
        }
    }
}

//Dessa maneira que configuramos o shared module
//Aqui utilizamos o MWP para configurar o shared module de forma que ele realize o carregamento dos providers tbm.