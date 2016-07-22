import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'curso',
  templateUrl: 'input-property.component.html',
  //inputs: ['nomeCurso:nome'] // outra forma de fazer o mesmo abaixo
})

export class InputPropertyComponent  {
  constructor() {  }
  @Input('nome') nomeCurso : string  = '';



}
