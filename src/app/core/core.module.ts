import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";

import { AuthInterceptor } from "./auth/auth.interceptor";
import { LeaveOrderGuards } from "./guards/leave-order.guards";
import { LoggedInGuard } from "./guards/logged-in.guards";
import { LoginService } from "./services/login.service";
import { NotificationService } from "./services/notification.service";
import { OrderService } from "./services/order.service";
import { RestaurantsService } from "./services/restaurants.service";
import { ShoppingCartService } from "./services/shopping-cart.service";


@NgModule({
    declarations: [],
    imports: [],
    exports: [],
})
export class CoreModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: CoreModule,
            providers: [
                ShoppingCartService,
                OrderService,
                RestaurantsService,
                NotificationService,
                LoginService,
                LoggedInGuard,
                LeaveOrderGuards,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: AuthInterceptor,
                    multi: true
                }
            ], //aqui foram feitas as declarações dos providers. 
        }
    }
}

//Nesse caso não houve a necessidade de configurar o core.module,
//pois alterações feitas no shared.module tornaram este modulo obsoleto para aplicação.