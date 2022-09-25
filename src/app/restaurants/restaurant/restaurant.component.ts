import { Component, OnInit, Input } from '@angular/core';

import { RestaurantModel } from '../../shared/models/restaurant.model'

@Component({
  selector: 'mt-restaurant',
  templateUrl: './restaurant.component.html'
})
export class RestaurantComponent implements OnInit {

  @Input()
  public restaurant!: RestaurantModel

  constructor() { }

  ngOnInit() {
  }

}
