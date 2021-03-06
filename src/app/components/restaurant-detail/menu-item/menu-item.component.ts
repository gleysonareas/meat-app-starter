import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { IMenuItemModel } from '../../../interfaces/menu-item-model.interface'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: IMenuItemModel
  @Output() add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

}
