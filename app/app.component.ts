import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component'

import { CursosComponent } from './cursos/cursos.component'

import { CursosService } from './cursos/cursos.service'

import { DataBindingComponent } from './data-binding/data-binding.component'

import { LifeCycleComponent } from './ciclo/life-cycle.component'

@Component({
    moduleId: module.id,
    selector: 'my-app',
    // template: `
    //     <h1>Angular 2 Boilerplate</h1>
    //     <p>Ola Mundo!</p>
    //     <meu-primeiro-component></meu-primeiro-component>
    //     <cursos-lista></cursos-lista>
    //     <exemplo-data-binding></exemplo-data-binding>
    // `,
    templateUrl: 'app.component.html',
    directives: [MeuPrimeiroComponent, CursosComponent, DataBindingComponent, LifeCycleComponent],
    providers: [CursosService]
})
export class AppComponent {
    valorInicial = 15;
    deletarConteudo = false;
}
