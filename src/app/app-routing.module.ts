import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./core/auth/login/login.component";
import { LoggedInGuard } from "./core/guards/logged-in.guards";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { OrderSummaryComponent } from "./order-summary/order-summary.component";
import { MenuComponent } from "./restaurant-detail/menu/menu.component";
import { RestaurantDetailComponent } from "./restaurant-detail/restaurant-detail.component";
import { ReviewsComponent } from "./restaurant-detail/reviews/reviews.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:to', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'restaurants/:id', component: RestaurantDetailComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', component: MenuComponent },
      { path: 'reviews', component: ReviewsComponent }
    ]
  },
  { path: 'restaurants', component: RestaurantsComponent },
  {
    path: 'order',
    loadChildren: () => import('./order/order.module')
      .then(m => m.OrderModule),
    canLoad: [LoggedInGuard], canActivate: [LoggedInGuard]
  },
  { path: 'order-summary', component: OrderSummaryComponent },
  {
    path: 'about',
    loadChildren: () => import("./about/about.module")
      .then(m => m.AboutModule)
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [
    // dessa forma atribuindo as propriedades preloading, realizamos o 
    // carregamento em segundo plano de modulos que mais tarde podem vir 
    // a ser utilizados pela aplicação.
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
