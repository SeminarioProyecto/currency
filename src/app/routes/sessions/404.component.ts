import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-404',
  template: `
    <error-code
      code="404"
      [title]="'Pagina no encontrada'"
      [message]="'Esta no es la pagina que estas buscando.'"
    ></error-code>
  `,
})
export class Error404Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
