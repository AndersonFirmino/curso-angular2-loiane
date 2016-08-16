"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var DataBindingComponent = (function () {
    function DataBindingComponent() {
        this.url = 'http://loiane.com';
        this.urlImg = 'http://lorempixel.com/400/200/nature/';
        this.conteudoAtual = '';
        this.conteudoSalvo = '';
        this.isMouseOver = false;
        this.nome = 'abc';
        this.pessoa = { nome: '', idade: 18 };
        this.nomeCurso = 'Curso Angular 2';
        this.valorInicial = 10;
    }
    DataBindingComponent.prototype.getValor = function () {
        return 1;
    };
    DataBindingComponent.prototype.onClick = function () {
        alert('Botão clicado!');
    };
    DataBindingComponent.prototype.onKeyup = function (event) {
        console.log(event);
        this.conteudoAtual = event.target.value;
    };
    DataBindingComponent.prototype.onSave = function (valor) {
        this.conteudoSalvo = valor;
    };
    DataBindingComponent.prototype.onMouseSpan = function () {
        this.isMouseOver = !this.isMouseOver;
    };
    DataBindingComponent.prototype.onValorMudou = function (event) {
        alert(event.novoValor);
    };
    DataBindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'exemplo-data-binding',
            templateUrl: 'data-binding.component.html',
            /*styles: [
              `
                .highlight {
                  background-color: yellow;
                  font-weight: bold;
                }
              `
            ]*/
            styleUrls: ['data-binding.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], DataBindingComponent);
    return DataBindingComponent;
}());
exports.DataBindingComponent = DataBindingComponent;
//# sourceMappingURL=data-binding.component.js.map