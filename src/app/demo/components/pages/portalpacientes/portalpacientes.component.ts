import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-portalpacientes',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, DialogModule],
  templateUrl: './portalpacientes.component.html',
  styleUrls: ['./portalpacientes.component.scss'],
})
export class PortalpacientesComponent {
  dialog_visible: boolean = false;

  categoriaForm = new FormGroup({
    nombre: new FormControl(''),
    detalle: new FormControl(''),
  });

  mostrarDialogo() {
    this.dialog_visible = true;
  }

  guardarCategoria() {
    console.log('Guardando categoría:', this.categoriaForm.value);
    this.dialog_visible = false; // Cierra el diálogo después de guardar
  }
}
