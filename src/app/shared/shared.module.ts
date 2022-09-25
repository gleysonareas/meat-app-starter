import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { InputComponent } from "./input/input.component";
import { SnackbarComponent } from "./messages/snackbar/snackbar.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";

@NgModule({
    declarations: [
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        InputComponent,
        RadioComponent,
        RatingComponent,
        SnackbarComponent,
    ],
})

export class SharedsModule {
}

//Dessa maneira que configuramos o shared module
//Aqui utilizamos o MWP para configurar o shared module de forma que ele realize o carregamento dos providers tbm.