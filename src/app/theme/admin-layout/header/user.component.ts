import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: `
    <a mat-button href="javascript:void(0)" [matMenuTriggerFor]="menu">
      <img
        class="matero-user-avatar r-full align-middle"
        src="assets/images/avatar.jpg"
        width="24"
        alt="avatar"
      />
      <span class="align-middle">Pedro Picapiedra</span>
    </a>

    <mat-menu #menu="matMenu">
      <a routerLink="/profile/overview" mat-menu-item>
        <mat-icon>account_circle</mat-icon>
        <span>Perfil</span>
      </a>
      <a routerLink="/profile/settings" mat-menu-item>
        <mat-icon>settings</mat-icon>
        <span>Opciones</span>
      </a>
      <a routerLink="/auth/login" mat-menu-item>
        <mat-icon>exit_to_app</mat-icon>
        <span>Cerrar Sesión</span>
      </a>
    </mat-menu>
  `,
})
export class UserComponent {}
