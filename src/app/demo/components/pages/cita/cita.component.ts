import { Component } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import axios from 'axios'

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrl: './cita.component.scss'
})
export class CitaComponent {
  private apiUrl = environment.api
  medicos: any[] = []; // Cambiar a tipo 'any[]' si necesitas propiedades adicionales como 'id'
  paciente: any;
  cedula: string = '';
  telefono: string = '';
  fecha: string = '';
  descripcion: string = '';
  correoElectronico: string = '';
  medicoSeleccionado: string = '';

  constructor() {}

  ngOnInit(): void {
    // Cargar los médicos al iniciar el componente
    this.mostrarMedicos();
  }

  getDoctors(): Observable<any> {
    const response = axios.get(`${this.apiUrl}/doctors`);
    return from(response.then(res => res.data));
  }
  getPatients(id:string): Observable<any> {
  const response = axios.get(`${this.apiUrl}/patients/${id}`);
  return from(response.then(res => res.data));
  }

  mostrarMedicos(): void {
    this.getDoctors().subscribe(
      (doctors: any[]) => {
        this.medicos = doctors;
        console.log(doctors)
      },
      error => {
        console.error('Error al obtener los médicos:', error);
      }
    );
  }
  // Método para agregar la cita
  agregarCita(): void {
    const citaData = {
      cedula: this.cedula,
      telefono: this.telefono,
      fecha: this.fecha,
      descripcion: this.descripcion,
      correoElectronico: this.correoElectronico,
      medicoId: this.medicoSeleccionado
    };
  }
}