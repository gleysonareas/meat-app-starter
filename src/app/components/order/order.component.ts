import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

import { CartItemModel } from '../../class/cart-item-model.class';
import { RadioOptionModel } from '../../class/radio-option-model.class';
import { OrderService } from '../../services/order.service';
import { OrderModel, OrderItemModel } from '../../class/order-model.class';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup
  delivery: number = 8

  //aqui foram criadas duas variaveis para se utilizar com o metodo pattern do validators.
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  numberPattern = /^[0-9]*$/

  paymentOptions: RadioOptionModel[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
    
  ]

  constructor(private orderService: OrderService, private router: Router, private formBuilder: FormBuilder) { }
  //não se pode esquecer de importar e declarar o serviço de rotas do @angular/router.

  //Dessa maneira começamos a trabalhar com reactive forms, utilizando as diretivas FormGroup e FormBuilder.
  //Abaixo no onInit, foi criado o parametro de controle que é utilizado para fazer as validações no formulario.

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      email: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      emailConfirmation: this.formBuilder.control('', [Validators.required, Validators.pattern(this.emailPattern)]),
      address: this.formBuilder.control('', [Validators.required, Validators.minLength(5)]),
      number: this.formBuilder.control('', [Validators.required, Validators.pattern(this.numberPattern)]),
      optionalAddress: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('', [Validators.required])
    }, { validator: OrderComponent.equalsTo })
  }

  static equalsTo(group: AbstractControl): { [key: string]: boolean } {
    const email = group.get('email')
    const emailConfirmation = group.get('emailConfirmation')
    if (!email || !emailConfirmation) {
      return undefined
    }

    if (email.value !== emailConfirmation.value) {
      return { emailsNotMatch: true }
    }
    return undefined
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems(): CartItemModel[] {
    return this.orderService.cartItems()
  }

  increaseQty(item: CartItemModel) {
    this.orderService.icreaseQty(item)
  }

  decreaseQty(item: CartItemModel) {
    this.orderService.decreaseQty(item)
  }

  remove(item: CartItemModel) {
    this.orderService.remove(item)
  }

  checkOrder(order: OrderModel) {
    order.orderItems = this.cartItems()
      .map((item: CartItemModel) => new OrderItemModel(item.quantity, item.menuItem.id))
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
        this.router.navigate(['order-summary'])//dessa maneira realizamos a navegação através do proprio component quando necessário
        //console.log(`Compra concluída: ${orderId}`)
        this.orderService.clear()
      })

    //console.log(order)
  }
}
