import { Component } from '@angular/core';

@Component({
    templateUrl: './calendariodemo.component.html'
})
export class CalendarDemoComponent {
    selectedDate!: Date; // Fecha seleccionada en el calendario
    appointments = [
        { date: '02/01/2024', time: '10:00 AM', doctor: 'Dra. María Gómez', patient: 'Juan Pérez', status: 'Confirmada' },
        { date: '03/01/2024', time: '02:30 PM', doctor: 'Dr. Luis Sánchez', patient: 'Ana López', status: 'Pendiente' },
        { date: '05/01/2024', time: '09:00 AM', doctor: 'Dra. Karina Mejía', patient: 'Carlos Ruiz', status: 'Cancelada' },
    ];

    es: any = {
        firstDayOfWeek: 1,
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        today: "Hoy",
        clear: "Limpiar"
    };
}
