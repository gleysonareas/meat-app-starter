import { HttpClientModule } from "@angular/common/http";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { ErrorHandler, Injector, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from "./core/core.module";
import { SharedsModule } from "./shared/shared.module";

import { AppComponent } from './app.component';
import { LoginComponent } from "./core/auth/login/login.component";
import { HeaderComponent } from "./header/header.component";
import { UserDetailComponent } from "./header/user-detail/user-detail.component";
import { HomeComponent } from "./home/home.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { MenuItemComponent } from "./restaurant-detail/menu/menu-item/menu-item.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { ShoppingCartComponent } from "./restaurant-detail/shopping-cart/shopping-cart.component";
import { RestaurantComponent } from "./restaurants/restaurant/restaurant.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FooterComponent } from "./footer/footer.component";
import { ApplicationErrorHandler } from "./app.error-handler";
import { RatingComponent } from "./shared/rating/rating.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSummaryComponent,
    NotFoundComponent,
    LoginComponent,
    UserDetailComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedsModule, //Nesse ponto importamos o shared module no modulo raíz para que toda aplicação tenha acesso a ele.
    CoreModule.forRoot(), //O core module tbm é importado aqui no modulo raiz.
    // BrowserAnimationsModule //Este modulo deve sempre ser declarado aqui na lista de imports
  ],
  providers: [
    // toda classe de serviços ela deve ser importada e declarada na 
    // lista de providers do modulo principal.
    { provide: LocationStrategy, useClass: HashLocationStrategy }, 
    // Implementando esses serviços, é possivel evitar o erro 404 do 
    // servidor, ja que o angular é carregado no client.
    { provide: LOCALE_ID, useValue: 'pt' },
    { provide: ErrorHandler, useClass: ApplicationErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
  // const component = createCustomElement(RatingComponent, { injector })
  // customElements.define('mt-rating', component)
  // }
  // ngDoBootstrap() { }
}
