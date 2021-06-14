import { RadioOptionModel } from '../../class/radio-option-model.class';
import { Component, OnInit, Input, forwardRef } from '@angular/core';
// sempre que temos algo ou uma opção no componente que vem de fora do component
// é necessário vc marcar a variavel  com o decorator @input  que deve ser importado 
//do modulo core do angular.
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
//Este import é necessário para utilizarmos reactive forms mais adiante

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RadioComponent),
      multi: true
    }
  ]
})
export class RadioComponent implements OnInit, ControlValueAccessor {
  //a implementação do CVA é feita extamente aqui

  @Input() options: RadioOptionModel[]
  // dessa forma definimos um objeto ou variavel do tipo array
  //assim marcamos o objeto com o decorator input.

  value: any

  onChange: any

  constructor() { }

  ngOnInit() {
  }

  setValue(value: any) {
    this.value = value
    this.onChange(this.value)
  }

  /**
 * Write a new value to the element.
 */
  writeValue(obj: any): void {
    this.value = obj
  }
  //Estes dois métodos são necessários para que a CVA funcione e futuramente posssamos utilizar os reactive forms
  registerOnChange(fn: any): void {
    this.onChange = fn
  }

  registerOnTouched(fn: any): void { }//Esse método e o método DisableState não há necessidade de ser implementado
  /**
   * This function is called when the control status changes to or from "DISABLED".
   * Depending on the value, it will enable or disable the appropriate DOM element.
   *
   * @param isDisabled
   */
  setDisabledState?(isDisabled: boolean): void { }
}
