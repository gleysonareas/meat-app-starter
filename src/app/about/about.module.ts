import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about.component';

const ROUTES: Routes = [
    { path: '', component: AboutComponent }
]

@NgModule({
    declarations: [
        AboutComponent
    ],
    imports: [
        RouterModule.forChild(ROUTES)
    ],
})

export class AboutModule { }

//aqui foi feito um modulo filho para realizar o lazyload desse component. para que ele só seja carregado quando for solicitado.
//este modulo é um feature module.