import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

import { IRestaurantModel } from '../../interfaces/restaurant-model.interface'
import { RestaurantsService } from '../../services/restaurants.service'

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

  searchBarState = 'hidden'
  restaurants: IRestaurantModel[]
  searchForm: FormGroup
  searchControl: FormControl

  constructor(
    private restaurantsService: RestaurantsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {

    this.searchControl = this.formBuilder.group('')
    this.searchForm = this.formBuilder.group({
      searchControl: this.searchControl
    })

    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)

    this.searchControl.valueChanges
      .debounceTime(500)//através do debounce time é possivel gerar um delay na consulta afim de que o banco não seja sobre carregado com requisições de pesquisa letra após letra.
      .distinctUntilChanged()//através desse operador é possivel evitar que a consulta de uma mesma palavra seja reenviada sem necessidade.
      //.do(searchTerm => console.log(`q=${searchTerm}`))
      .switchMap(searchTerm => this.restaurantsService//aqui foi feito um switch map atraves desse operador evitamos que um subscribe reescreva o outro.
        .restaurants(searchTerm)
        .catch(error => Observable.from([])))//Aqui é feito o tratamento do erro de consulta afim de evitar que o value changes pare de funcionar.
      .subscribe(restaurants => this.restaurants = restaurants) // com o valor do switch map foi feito um subscribe
  }

  toggleSeach() {
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }
}