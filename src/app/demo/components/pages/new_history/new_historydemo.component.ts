import { Component } from '@angular/core';

@Component({
  templateUrl: './new_historydemo.component.html'
})
export class NewHistoryDemoComponent {

  // Objeto para guardar la nueva historia clínica
  newHistory = {
    name: '',
    age: null,
    gender: null,
    diagnosis: '',
    treatment: ''
  };

  // Opciones de género
  genders = [
    { label: 'Masculino', value: 'Masculino' },
    { label: 'Femenino', value: 'Femenino' }
  ];

  // Método para guardar la historia clínica
  saveHistory() {
    console.log('Nueva Historia Clínica Guardada:', this.newHistory);
    // Aquí podrías agregar la lógica para enviar la información al backend
    alert('Historia clínica guardada con éxito!');
    // Resetear el formulario después de guardar
    this.newHistory = {
      name: '',
      age: null,
      gender: null,
      diagnosis: '',
      treatment: ''
    };
  }
}

