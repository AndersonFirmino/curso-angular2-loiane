import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lifecycle',
  templateUrl: 'life-cycle.component.html',
})
export class LifeCycleComponent implements OnInit {
  constructor() {  }

  @Input() valorInicial = 10;

  @ViewChild('variavelLocalP') variavelLocalP : HTMLElement;

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.variavelLocalP);    
  }
}
