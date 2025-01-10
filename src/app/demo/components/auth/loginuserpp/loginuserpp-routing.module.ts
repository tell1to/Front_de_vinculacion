import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginuserppComponent } from './loginuserpp.component';

const routes: Routes = [
  { path: '', component: LoginuserppComponent } // Configura la ruta correctamente
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginuserppRoutingModule { }
