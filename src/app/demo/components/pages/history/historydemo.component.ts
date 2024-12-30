import { Component } from '@angular/core';

@Component({
  templateUrl: './historydemo.component.html'
})
export class HistoryDemoComponent {

  // Datos de ejemplo
  historicalRecords = [
    { date: '2024-01-10', time: '10:00 AM', doctor: 'Dra. María Gómez', diagnosis: 'Hipertensión', treatment: 'Inhibidores ACE', status: 'Completado' },
    { date: '2024-02-15', time: '02:30 PM', doctor: 'Dr. Luis Sánchez', diagnosis: 'Reflujo gastroesofágico', treatment: 'Antiácidos', status: 'En seguimiento' },
    { date: '2024-03-05', time: '09:00 AM', doctor: 'Dra. Karina Mejía', diagnosis: 'Dolor lumbar crónico', treatment: 'Fisioterapia', status: 'Cancelado' }
  ];

}
