import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-500',
  template: `
    <error-code
      code="500"
      [title]="'El servidor no funciona!'"
      [message]="
        'Es broma, parece que tenemos un problema interno, intente actualizar.'
      "
    >
    </error-code>
  `,
})
export class Error500Component implements OnInit {
  constructor() {}

  ngOnInit() {}
}
