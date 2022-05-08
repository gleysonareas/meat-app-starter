import { NgModule } from "@angular/core";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { SharedsModule } from "./../shared/shared.module"

@NgModule({
    declarations: [
        HomeComponent,
        NotFoundComponent,
        RestaurantsComponent,
        AboutComponent,
    ],
    imports: [
    
    ],
    exports: [
        HomeComponent,
        NotFoundComponent,
        RestaurantsComponent,
        AboutComponent,
    ]
})
export class PagesModule { }