import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginuserppComponent } from './loginuserpp.component';
import { LoginuserppRoutingModule } from './loginuserpp-routing.module';
import { PasswordModule } from 'primeng/password'; // Importa el módulo
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    LoginuserppComponent
  ],
  imports: [
    CommonModule,
    LoginuserppRoutingModule,
    PasswordModule, // Agrégalo aquí
    ButtonModule
  ]
})
export class LoginuserppModule { }
