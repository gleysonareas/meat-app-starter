// import { LoggedInGuard } from 'app/core/guards/logged-in.guards';
import { Routes } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { RestaurantsComponent } from './Pages/restaurants/restaurants.component'
// import { RestaurantDetailComponent } from './shared/components/restaurant/restaurant-detail/restaurant-detail.component';
// import { MenuComponent } from './shared/components/restaurant/restaurant-detail/menu/menu.component';
// import { ReviewsComponent } from './shared/components/restaurant/restaurant-detail/reviews/reviews.component';
// import { OrderSummaryComponent } from './shared/components/order-summary/order-summary.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { LoginComponent } from './core/auth/login/login.component';

export const AppRoutingModule: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login/:to',
        // component: LoginComponent
    },
    {
        path: 'login',
        // component: LoginComponent
    },
    {
        // path: 'restaurants/:id', component: RestaurantDetailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            // { path: 'menu', component: MenuComponent },
            // { path: 'reviews', component: ReviewsComponent },
        ]
    },
    {
        path: 'restaurants',
        component: RestaurantsComponent
    },
    {
        path: 'order',
        loadChildren: './shared/components/order/order.module#OrderModule',
        // canLoad: [LoggedInGuard],
        // canActivate: [LoggedInGuard]
    },//a chamada de um feature module deve sempre ser feita aqui no (app.routes). Diferentemente dos shareds modules que são chamados no modulo principal.
    {
        path: 'order-summary',
        // component: OrderSummaryComponent
    },
    {
        path: 'about',
        loadChildren: './pages/about/about.module#AboutModule'
    },//aqui eu defino que o componente dessa rota será carregado de um modulo a parte
    {
        path: '**',
        component: NotFoundComponent
    },
]