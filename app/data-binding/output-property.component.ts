import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'contador',
  templateUrl: 'output-property.component.html',
})
export class OutputPropertyComponent {
  constructor() {  }
  @Input() valor : number = 0;

  @Output() mudouValor = new EventEmitter();

  decrementa() {
    this.valor -= 1;
    this.mudouValor.emit({ novoValor: this.valor });
  }

  incrementa() {
    this.valor += 1;
    this.mudouValor.emit({ novoValor: this.valor });
  }

}
