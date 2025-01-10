import { NgModule } from '@angular/core'; 
import { CommonModule } from '@angular/common';

import { PortalpacientesRoutingModule } from './portalpacientes-routing.module';
import { DialogModule } from 'primeng/dialog'; // Importar el módulo de PrimeNG

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortalpacientesRoutingModule,
    DialogModule // Agregar aquí
  ]
})
export class PortalpacientesModule { }
