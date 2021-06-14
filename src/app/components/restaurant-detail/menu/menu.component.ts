import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from '../../../services/restaurants.service';
import { IMenuItemModel } from "../../../interfaces/menu-item-model.interface"

import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<IMenuItemModel[]>

  constructor(private restaurantsService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.menu = this.restaurantsService
    .menuOfRestaurant(this.route.parent.snapshot.params['id'])

  }
}
