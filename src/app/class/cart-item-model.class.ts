import { IMenuItemModel } from "../interfaces/menu-item-model.interface"

export class CartItemModel {
  constructor
    (
      public menuItem: IMenuItemModel,
      public quantity: number = 1
    ) { }

  value(): number {
    return this.menuItem.price * this.quantity
  }
}
