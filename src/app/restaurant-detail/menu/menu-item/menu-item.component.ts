import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { MenuItemModel } from '../../../shared/models/menu-item.model'

@Component({
  selector: 'mt-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent implements OnInit {

  @Input()
  public menuItem!: MenuItemModel

  @Output()
  public add = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  emitAddEvent() {
    this.add.emit(this.menuItem)
  }

}
