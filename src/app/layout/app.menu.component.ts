import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            
            {
                label: 'Budget',
                items: [
                    {
                        label: 'Budget',
                        icon: 'pi pi-fw pi-dollar',
                        items: [
                            {label: 'Budget Create',
                                icon: 'pi pi-fw pi-plus',
                                routerLink: ['/pages/budget/create'],
                                }
                        ]
                    }

                ]
            },
            
            {
                label: 'Pages',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    
                    {
                        label: 'Accesos-Admin',
                        icon: 'pi pi-fw pi-user',
                        items: [
                            {
                                label: 'Login',
                                icon: 'pi pi-fw pi-sign-in',
                                routerLink: ['/auth/login']
                            },
                            {
                                label: 'Register',
                                icon: 'pi pi-fw pi-user-minus',
                                routerLink: ['/auth/register']
                            },
                           /* {
                                label: 'Error',
                                icon: 'pi pi-fw pi-times-circle',
                                routerLink: ['/auth/error']
                            },
                            {
                                label: 'Access Denied',
                                icon: 'pi pi-fw pi-lock',
                                routerLink: ['/auth/access']
                            },*/
                            
                        ]
                    },
                    {
                        label: 'Admin',
                        icon: 'pi pi-fw pi-user-edit',
                        routerLink: ['/pages/admin']
                    }, /*                  
                    {
                        label: 'Crud',
                        icon: 'pi pi-fw pi-pencil',
                        routerLink: ['/pages/crud']
                    },*/
                    {
                        label: 'Usuario Portal',
                        icon: 'pi pi-heart',
                        items: [
                            {
                                label: 'Portal para Pacientes',
                                icon: 'pi pi-users',
                                routerLink: ['/pages/portalpacientes']
                            },
                        ]
                    },
                    
                    {
                        label: 'No encontrado',
                        icon: 'pi pi-fw pi-exclamation-circle',
                        routerLink: ['/notfound']
                    },
                    {
                        label: 'Vacio',
                        icon: 'pi pi-fw pi-circle-off',
                        routerLink: ['/pages/empty']
                    },
                   
                    {
                        label: 'Agendar Cita',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['/pages/cita']
                    },
                ]
            },
            
        ];
    }
}
