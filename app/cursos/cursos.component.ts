import { Component } from '@angular/core';

import { CursosService } from './cursos.service'

@Component({
    moduleId: module.id, // sempre adiconar esse cara quando adicionar uma url de template.
    selector: 'cursos-lista',
    // template: `
    // <p>Olá, meu nome é: {{ nome }}</p>
    // <ul>
    //     <li *ngFor="let lang of linguagens">
    //         {{ lang }}
    //     </li>
    // </ul>
    // `
    templateUrl: 'cursos.component.html' // busca dentro da pasta curso o html correspondente.
})
export class CursosComponent {
    nome = "Anderson";
    //linguagens = ['Python', 'JavaScript', 'C++'];
    cursos;
    constructor(cursosService: CursosService) {
        this.cursos = cursosService.getCursos();
    }
}
