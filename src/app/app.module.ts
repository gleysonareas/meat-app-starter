import { SharedModule } from './shared/shared.module';
//import {CoreModule} from './core/core.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'


import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID} from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, PreloadAllModules } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ROUTES } from './app.routes';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './order-summary/order-summary.component';

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
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(), //Nesse ponto importamos o shared module no modulo raíz para que toda aplicação tenha acesso a ele.
    //CoreModule, //O core module tbm é importado aqui no modulo raiz.
    RouterModule.forRoot(ROUTES, {preloadingStrategy: PreloadAllModules}), //dessa forma atribuindo as propriedades 
    //preloading, realizamos o carregamento em segundo plano de modulos que mais tarde podem vir a ser utilizados 
    //pela aplicação.
    BrowserAnimationsModule //Este modulo deve sempre ser declarado aqui na lista de imports
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  //toda classe de serviços ela deve ser importada e declarada na lista de providers do modulo principal.
  bootstrap: [AppComponent]
})
export class AppModule { }
