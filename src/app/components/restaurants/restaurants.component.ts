import { Component, OnInit } from '@angular/core';

import { IRestaurantModel } from '../../interfaces/restaurant-model.interface'
import { RestaurantsService } from '../../services/restaurants.service'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {

  restaurants: IRestaurantModel[]

  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {

    this.restaurantsService.restaurants()
      .subscribe(restaurants => this.restaurants = restaurants)

  }
}