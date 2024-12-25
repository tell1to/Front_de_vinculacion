import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

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

    clave!: string;
    repiteClave!: string;

    constructor(private router: Router, public layoutService: LayoutService) { }

    verificarClaves() {
        if (this.clave === this.repiteClave) {
            // Redirige a la página de inicio
            this.router.navigate(['/']);
        } else {
            // Muestra un mensaje de error
            alert('Las contraseñas no coinciden');
        }
    }
}
