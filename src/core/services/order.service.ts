import { MEAT_API } from '../app.api';
//dessa maneira é feita uma class de serviços no angular.
//sempre que for fazer injeção de dependencia é necessario marcar a class com decorator @Injectable, que é importado do modulo core do angular.
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { ShoppingCartService } from "./shopping-cart.service";
import { CartItemModel } from '../class/cart-item-model.class';
import { OrderModel } from '../class/order-model.class';
import { map } from 'rxjs/operators';



@Injectable()
export class OrderService {
    constructor(
        private cartService: ShoppingCartService,
        private http: HttpClient,
    ) {
    }
    cartItems(): CartItemModel[] {
        return this.cartService.items
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    icreaseQty(item: CartItemModel) {
        this.cartService.increseQty(item)
    }

    decreaseQty(item: CartItemModel) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItemModel) {
        this.cartService.removeItem(item)
    }

    clear() {
        this.cartService.clear()
    }

    checkOrder(order: OrderModel): Observable<string> {
        //const headers = new Headers() Não é mais necessário a partir do angular 4.3
        //headers.append('Content-Type', 'application/json')
        return this.http.post<OrderModel>(`${MEAT_API}/orders`, order)
            .pipe(map(order => order.id))
        //new RequestOptions({ headers: headers }))
        //.map(response => response.json())
        // ao inves de trocar o observable string para order, foi feito um novo map, passando o order.id
        //se necessário podemos utilizar varios operadores map para transformarmos a resposta json, até o ponto que agnt quer
    }
}