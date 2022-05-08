import { NgModule } from "@angular/core";
import { ComponentsModule } from "./components/components.module";

@NgModule({
    imports: [
        ComponentsModule,
    ],
    exports: [
        ComponentsModule,
    ],
})

export class SharedsModule {
}

//Dessa maneira que configuramos o shared module
//Aqui utilizamos o MWP para configurar o shared module de forma que ele realize o carregamento dos providers tbm.