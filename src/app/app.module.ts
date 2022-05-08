// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LocationStrategy, HashLocationStrategy, registerLocaleData } from '@angular/common';
import locatePt from '@angular/common/locales/pt'
// import { Injector } from '@angular/core';
// import { RouterModule, PreloadAllModules } from '@angular/router';
// import { RatingComponent } from './shared/components/rating/rating.component';
// import { CoreModule } from './core/core.module';
// import { SharedsModule } from './shared/shared.module';
// import { AppRoutingModule } from './app-routing.module';
// import { ApplicationErrorHandler } from './app.error-handler';
import { AppComponent } from './app.component';

registerLocaleData(locatePt, 'pt')
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // SharedsModule, //Nesse ponto importamos o shared module no modulo raíz para que toda aplicação tenha acesso a ele.
    // CoreModule.forRoot(), //O core module tbm é importado aqui no modulo raiz.
    // RouterModule.forRoot(AppRoutingModule, { preloadingStrategy: PreloadAllModules }), //dessa forma atribuindo as propriedades 
    // preloading, realizamos o carregamento em segundo plano de modulos que mais tarde podem vir a ser utilizados 
    // pela aplicação.
    // BrowserAnimationsModule //Este modulo deve sempre ser declarado aqui na lista de imports
  ],
  providers: [
    // toda classe de serviços ela deve ser importada e declarada na lista de providers do modulo principal.
    // { provide: LocationStrategy, useClass: HashLocationStrategy }, //Implementando esses serviços, é possivel evitar o erro 404 do servidor, ja que o angular é carregado no client.
    // { provide: LOCALE_ID, useValue: 'pt' },
    // { provide: ErrorHandler, useClass: ApplicationErrorHandler }
  ],
  entryComponents: [
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {
  // constructor(private injector: Injector) {
  // const component = createCustomElement(RatingComponent, { injector })
  // customElements.define('mt-rating', component)
  // }
  // ngDoBootstrap() { }
}

