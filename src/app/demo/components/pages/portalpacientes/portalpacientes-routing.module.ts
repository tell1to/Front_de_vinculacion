import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortalpacientesComponent } from './portalpacientes.component'; // Importa el componente principal

const routes: Routes = [
  { path: '', component: PortalpacientesComponent }, // Ruta predeterminada del módulo
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalpacientesRoutingModule { }
