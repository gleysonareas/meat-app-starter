// import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { RestaurantModel } from '../shared/models/restaurant.model'
import { RestaurantsService } from '../core/services/restaurants.service'
import { switchMap, tap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';
import { from } from 'rxjs';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px"
      })),
      state('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]

})
export class RestaurantsComponent implements OnInit {

  public searchBarState = 'hidden'
  public restaurants!: RestaurantModel[];
  public searchForm!: FormGroup;
  public searchControl!: FormControl;

  constructor(
    private restaurantsService: RestaurantsService,
    private formBuilder: FormBuilder,
  ) { }

  public ngOnInit(): void {

    this.searchControl = this.formBuilder.group('') as any;
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    });

    this.restaurantsService.restaurants()
      .subscribe((restaurants?: RestaurantModel[]): RestaurantModel[] => {
        return this.restaurants = restaurants as RestaurantModel[];
      })

    this.searchControl.valueChanges
      .pipe(debounceTime(500),
        distinctUntilChanged(),
        switchMap(searchTerm => this.restaurantsService
          .restaurants(searchTerm)
          .pipe(catchError(error => from([]))))
      )
      .subscribe(restaurants => {
        return this.restaurants = restaurants as any;
      })
    this.restaurantsService
      .restaurants()
      .subscribe((restaurants?: RestaurantModel[]): RestaurantModel[] =>
        this.restaurants = restaurants as any)
    //através do debounce time é possivel gerar um delay na consulta afim de que o banco não seja sobre carregado com requisições de pesquisa letra após letra.
    //através desse operador é possivel evitar que a consulta de uma mesma palavra seja reenviada sem necessidade.
    //.do(searchTerm => console.log(`q=${searchTerm}`))
    //aqui foi feito um switch map atraves desse operador evitamos que um subscribe reescreva o outro.
    //Aqui é feito o tratamento do erro de consulta afim de evitar que o value changes pare de funcionar.
    // com o valor do switch map foi feito um subscribe
  }

  toggleSeach() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden';
  }
}