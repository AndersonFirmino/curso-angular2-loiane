import { Component, OnInit, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'lifecycle',
  templateUrl: 'life-cycle.component.html',
})
export class LifeCycleComponent implements OnInit {
  constructor() {  }

  @Input() valorInicial = 10;

  ngOnInit() {
    console.log('ngOnInit');
  }
}
