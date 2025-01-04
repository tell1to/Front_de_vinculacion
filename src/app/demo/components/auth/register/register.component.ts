import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { RegisterService } from './register.service';

@Component({
    selector: 'app-login',
    templateUrl: './register.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class RegisterComponent {

    valCheck: string[] = ['remember'];
    email: string = '';
    clave!: string;
    identificacion: string = '';
    nombreC: string = '';
    

    constructor(private registerService:RegisterService, public layoutService: LayoutService) { }

    async verificarClaves() {
        try {
            const result = await this.registerService.register({ email: this.email, password: this.clave, identification: this.identificacion, name: this.nombreC });
            console.log('Registro exitoso:', result);
           
          } catch (error) {
            console.error('Error al iniciar sesión:', error);
          }
    }
}
