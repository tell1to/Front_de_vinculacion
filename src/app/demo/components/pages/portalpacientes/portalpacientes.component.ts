import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { PortalService } from './portalpacientes.service';

@Component({
  selector: 'app-portalpacientes',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, DialogModule],
  templateUrl: './portalpacientes.component.html',
  styleUrls: ['./portalpacientes.component.scss'],
})
export class PortalpacientesComponent {
  constructor(private portalService: PortalService) { }
  dialog_visible: boolean = false;
  doctors: any[] = []
  patient: any = null
  appointment: any = null
  categoriaForm = new FormGroup({
    //name: new FormControl(''),
    patient: new FormControl(''),
    //identification: new FormControl(''),
    //phone: new FormControl(''),
    //speciality: new FormControl(''),
    doctor: new FormControl(''),
    //email: new FormControl(''),
    detalle: new FormControl(''),
  });
  getdoctors() {
    this.portalService.getDoctors().subscribe(doctors => {
      this.doctors = doctors
    })
  }
  getpatients(CC: any) {
    this.portalService.getPatient(CC).subscribe(patient => {
      this.patient = patient
    })
  }
  postAppointment(data: any) {
    this.portalService.postAppointment(data).subscribe(appointment => {
      this.appointment = appointment
    })
  }
  mostrarDialogo() {
    this.dialog_visible = true;
    this.getdoctors()
  }

  guardarCategoria() {
    const data = {
      date: "2025-01-15",
      descripcion: "Consulta de seguimiento para revisión médica",
      doctor: this.categoriaForm.value.doctor,
      patient: this.patient?.id,
      user: "sebas@example.com"
    }
    console.log('Guardando categoría:', this.categoriaForm.value);
    this.postAppointment(this.categoriaForm.value)
    this.dialog_visible = false; // Cierra el diálogo después de guardar
  }
}
