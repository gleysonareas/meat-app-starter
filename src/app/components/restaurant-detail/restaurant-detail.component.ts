import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RestaurantsService } from '../../services/restaurants.service';
import { IRestaurantModel } from '../../interfaces/restaurant-model.interface';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: IRestaurantModel

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)

  }

}
