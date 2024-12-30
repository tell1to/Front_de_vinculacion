import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },
        { path: 'cita', loadChildren: () => import ('./cita/cita.module').then(m => m.CitaModule)},
        { path: 'admin', loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)},
        
        { path: '**', redirectTo: '/notfound' },
        

    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
