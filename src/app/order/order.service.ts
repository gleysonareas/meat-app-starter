import { MEAT_API } from './../app.api';
//dessa maneira é feita uma class de serviços no angular.
//sempre que for fazer injeção de dependencia é necessario marcar a class com decorator @Injectable, que é importado do modulo core do angular.
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";

import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shopping-cart.service";
import { CartItem } from './../restaurant-detail/shopping-cart/cart-item.model';
import { Order} from "./order.model";



@Injectable()
export class OrderService {
    constructor(private cartService: ShoppingCartService, private http: Http) {
    }
    cartItems(): CartItem[] {
        return this.cartService.items
    }

    itemsValue(): number {
        return this.cartService.total()
    }

    icreaseQty(item: CartItem) {
        this.cartService.increseQty(item)
    }

    decreaseQty(item: CartItem) {
        this.cartService.decreaseQty(item)
    }

    remove(item: CartItem) {
        this.cartService.removeItem(item)
    }

    clear() {
        this.cartService.clear()
    }

    checkOrder(order: Order): Observable<string> {
        const headers = new Headers()
        headers.append('Content-Type', 'application/json')

        return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),
            new RequestOptions({ headers: headers }))
            .map(response => response.json())
            .map(order => order.id) // ao inves de trocar o observable string para order, foi feito um novo map, passando o order.id
            //se necessário podemos utilizar varios operadores map para transformarmos a resposta json, até o ponto que agnt quer
    }
}