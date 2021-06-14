import { Routes } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { RestaurantsComponent } from './components/restaurants/restaurants.component'
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { MenuComponent } from './components/restaurant-detail/menu/menu.component';
import { ReviewsComponent } from './components/restaurant-detail/reviews/reviews.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const AppRoutingModule: Routes = [
    { path: '', component: HomeComponent },
    { path: 'restaurants', component: RestaurantsComponent },
    {
        path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: MenuComponent },
            { path: 'reviews', component: ReviewsComponent },
        ]
    },
    { path: 'order', loadChildren: '../components/order/order.module#OrderModule' },//a chamada de um feature module deve sempre ser feita aqui no (app.routes). Diferentemente dos shareds modules que são chamados no modulo principal.
    { path: 'order-summary', component: OrderSummaryComponent },
    { path: 'about', loadChildren: '../components/about/about.module#AboutModule' },//aqui eu defino que o componente dessa rota será carregado de um modulo a parte
    { path: '**', component: NotFoundComponent },
]