import { Component, OnInit, Input } from '@angular/core';

import {IRestaurantModel} from '../../../interfaces/restaurant-model.interface'

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input() restaurant: IRestaurantModel

  constructor() { }

  ngOnInit() {
  }

}
