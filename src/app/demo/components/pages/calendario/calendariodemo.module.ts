import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarDemoComponent } from './calendariodemo.component';
import { CalendarDemoRoutingModule } from './calendariodemo-routing.module';
import { TableModule } from 'primeng/table'; 
import { CalendarModule } from 'primeng/calendar'; 
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [CalendarDemoComponent],
  imports: [
    CommonModule,
    CalendarDemoRoutingModule,
    TableModule,
    CalendarModule, // Agregar módulo de calendario PrimeNG
    FormsModule // Para el two-way binding en el calendario
  ]
})
export class CalendarDemoModule { }
