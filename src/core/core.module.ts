import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { ModuleWithProviders, NgModule } from "@angular/core";
// import { SharedsModule } from "app/shared/shared.module";
import { LeaveOrderGuards } from "./../core/guards/leave-order.guards";
import { LoggedInGuard } from "./../core/guards/logged-in.guards";
import { AuthInterceptor } from "./auth/login/auth.interceptor";
import { LoginComponent } from "./auth/login/login.component";
import { LoginService } from "./services/login.service";
import { NotificationService } from "./services/notification.service";
import { OrderService } from "./services/order.service";
import { RestaurantsService } from "./services/restaurants.service";
import { ShoppingCartService } from "./services/shopping-cart.service";
import { HeaderComponent } from "./template/header/header.component";

@NgModule({
    declarations: [
        HeaderComponent,
        LoginComponent,
    ],
    imports: [
        // SharedsModule
    ],
    exports: [
        HeaderComponent,
        LoginComponent,
    ],
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