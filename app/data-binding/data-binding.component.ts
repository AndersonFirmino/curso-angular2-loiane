import { Component } from '@angular/core';

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
  styleUrls: ['data-binding.component.css']
  templateUrl: 'data-binding.component.html',
})
export class DataBindingComponent {
  constructor() {  }
  url = 'www.google.com.br';
  urlImg = 'http://lorempixel.com/400/200/cats';

  //No javascript a tipagem de variaveis é dinamica mas no TypeScript, podemos passar o tipo
  //desta forma
  //variavel_string: string = 'valor';

  contudoAtual : string = '';
  conteudoSalvo : string = '';
  isMouseOver : boolean = false;

  getValor() {
    return 1;
  }

  onClick() {
    alert("Botão clicado");
  }

  onKeyUp(event) {
    console.log(event);
    this.conteudoAtual = event.target.value
  }

  onSave(valor: string) {
    this.conteudoSalvo = valor;
  }

  onMouseSpan() {
    this.isMouseOver = !this.isMouseOver;
  }

}
