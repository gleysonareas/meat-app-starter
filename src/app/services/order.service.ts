import { LoginService } from './login.service';
import { MEAT_API } from '../app.api';
//dessa maneira é feita uma class de serviços no angular.
//sempre que for fazer injeção de dependencia é necessario marcar a class com decorator @Injectable, que é importado do modulo core do angular.
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { ShoppingCartService } from "./shopping-cart.service";
import { CartItemModel } from '../class/cart-item-model.class';
import { OrderModel } from '../class/order-model.class';



@Injectable()
export class OrderService {
    constructor(
        private cartService: ShoppingCartService,
        private http: HttpClient,
        private loginService: LoginService
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
        let headers = new HttpHeaders()
        if(this.loginService.isLoggedIn()){
            headers = headers.set('Authorization', `Bearer ${this.loginService.user.accessToken}`)//Dessa forma é passada a autorização
        }
        //const headers = new Headers() Não é mais necessário a partir do angular 4.3
        //headers.append('Content-Type', 'application/json')
        return this.http.post<OrderModel>(`${MEAT_API}/orders`, order, {headers: headers})
            //new RequestOptions({ headers: headers }))
            //.map(response => response.json())
            .map(order => order.id) // ao inves de trocar o observable string para order, foi feito um novo map, passando o order.id
        //se necessário podemos utilizar varios operadores map para transformarmos a resposta json, até o ponto que agnt quer
    }
}