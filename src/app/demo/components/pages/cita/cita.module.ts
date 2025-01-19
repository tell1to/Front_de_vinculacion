import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitaRoutingModule } from './cita-routing.module';
import { FormsModule } from '@angular/forms';
import { CitaComponent } from './cita.component';



@NgModule({
  declarations: [CitaComponent],
  imports: [
    CommonModule,
    CitaRoutingModule,
    FormsModule
  ]
})
export class CitaModule { }
