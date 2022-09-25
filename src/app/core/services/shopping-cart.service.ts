import { MenuItemModel } from "../../shared/models/menu-item.model"
import { CartItemModel } from "../../shared/models/cart-item.model"

export class ShoppingCartService {
  items: CartItemModel[] = []

  clear() {
    this.items = []
  }

  addItem(item: MenuItemModel) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id)
    if (foundItem) {
      this.increseQty(foundItem)
    } else {
      this.items.push(new CartItemModel(item))
    }
  }

  increseQty(item: CartItemModel){
    item.quantity = item.quantity + 1
  }

  decreaseQty(item: CartItemModel){
    item.quantity = item.quantity - 1
    if (item.quantity === 0){
      this.removeItem(item)
    }
  }

  removeItem(item: CartItemModel) {
    this.items.splice(this.items.indexOf(item), 1)
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0)
  }
}
