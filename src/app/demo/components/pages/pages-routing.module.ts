import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'crud', loadChildren: () => import('./crud/crud.module').then(m => m.CrudModule) },
        { path: 'empty', loadChildren: () => import('./empty/emptydemo.module').then(m => m.EmptyDemoModule) },

        { path: 'cita', loadChildren: () => import ('./cita/cita.module').then(m => m.CitaModule)},
        { path: 'admin', loadChildren: () => import ('./admin/admin.module').then(m => m.AdminModule)},
        
        {path: 'budget', loadChildren: () => import('./budget/budget.module').then(m => m.BudgetModule)},
        { path: 'history', loadChildren: () => import('./history/historydemo.module').then(m => m.HistoryDemoModule) },
        { path: 'new-history', loadChildren: () => import('./new_history/new_historydemo.module').then(m => m.NewHistoryDemoModule) },
        { path: '**', redirectTo: '/notfound' }

    ])],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
