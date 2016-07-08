import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component'

@Component({
    selector: 'my-app',
    template: `
        <h1>Angular 2 Boilerplate</h1>
        <p>Ola Mundo!</p>
        <meu-primeiro-component></meu-primeiro-component>
    `,
    directives: [MeuPrimeiroComponent]

})
export class AppComponent { }
