import { Component } from '@angular/core';

import { InputPropertyComponent } from './input-property.component'

@Component({
  moduleId: module.id,
  selector: 'exemplo-data-binding',
  //podemos usar styles aqui dentro dos components, util para coisas pequenas, para um style de mais linhas usar o
  // styleUrls
  // styles: [
  //   `
  //   .highlight {
  //       background-color: yellow;
  //       font-weight: bold;
  //   }
  //   `
  // ]
  styleUrls: ['data-binding.component.css'],
  templateUrl: 'data-binding.component.html',
  directives: [InputPropertyComponent]
})

export class DataBindingComponent {
  constructor() {  }
  url = 'www.google.com.br';
  urlImg = 'http://lorempixel.com/400/200/cats';

  //No javascript a tipagem de variaveis é dinamica mas no TypeScript, podemos passar o tipo
  //desta forma
  //variavel_string: string = 'valor';

  conteudoAtual : string = '';
  conteudoSalvo : string = '';
  isMouseOver : boolean = false;
  nome : string = 'hey';

  nomeCurso : string = 'Curso Angular 2';

  pessoa  = { nome: '', idade: 18 };

  getValor() {
    return 1;
  }

  onClick() {
    alert("Botão clicado");
  }

  onKeyUp(event) {
    console.log(event);
    this.conteudoAtual = event.target.value;
  }

  onSave(valor: string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }

}
