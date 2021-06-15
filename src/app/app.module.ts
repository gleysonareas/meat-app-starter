//import {CoreModule} from './core/core.module';
import { SharedsModule } from './shareds/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantComponent } from './components/restaurants/restaurant/restaurant.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './components/restaurant-detail/menu/menu.component';
import { ShoppingCartComponent } from './components/restaurant-detail/shopping-cart/shopping-cart.component';
import { MenuItemComponent } from './components/restaurant-detail/menu-item/menu-item.component';
import { ReviewsComponent } from './components/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedsModule.forRoot(), //Nesse ponto importamos o shared module no modulo raíz para que toda aplicação tenha acesso a ele.
    //CoreModule, //O core module tbm é importado aqui no modulo raiz.
    RouterModule.forRoot(AppRoutingModule, { preloadingStrategy: PreloadAllModules }), //dessa forma atribuindo as propriedades 
    //preloading, realizamos o carregamento em segundo plano de modulos que mais tarde podem vir a ser utilizados 
    //pela aplicação.
    BrowserAnimationsModule //Este modulo deve sempre ser declarado aqui na lista de imports
  ],
  providers: [
    //toda classe de serviços ela deve ser importada e declarada na lista de providers do modulo principal.
    { provide: LocationStrategy, useClass: HashLocationStrategy }, //Implementando esses serviços, é possivel evitar o erro 404 do servidor, ja que o angular é carregado no client.
    { provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
