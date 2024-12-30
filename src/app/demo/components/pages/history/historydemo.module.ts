import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryDemoComponent } from './historydemo.component';
import { HistoryDemoRoutingModule } from './historydemo-routing.module';
import { TableModule } from 'primeng/table';  // Importar el módulo de la tabla
import { ButtonModule } from 'primeng/button'; // Si quieres usar botones o interacción adicional

@NgModule({
    declarations: [HistoryDemoComponent],
    imports: [
        CommonModule,
        HistoryDemoRoutingModule,
        TableModule,  // Agregar módulo de la tabla
        ButtonModule   // Agregar botones si es necesario
    ]
})
export class HistoryDemoModule { }
