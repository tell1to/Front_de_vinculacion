import { Component } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from 'src/app/demo/components/auth//login/login.service'; 


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];
    email: string = '';
    clave: string = '';

    constructor(
        private loginService: LoginService,
        public layoutService: LayoutService) { }

        async onLogin() {
            try {
                const result = await this.loginService.login({ email: this.email, password: this.clave });
                console.log('Login exitoso:', result);
                // Aquí puedes manejar el almacenamiento de tokens o redirigir al usuario
              } catch (error) {
                console.error('Error al iniciar sesión:', error);
              }
        }
}
