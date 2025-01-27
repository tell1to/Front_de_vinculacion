import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.scss']
})
export class BudgetFormComponent implements OnInit {
  budgetForm: FormGroup;
  displayModal: boolean = false;
  services: any[] = [];
  budgetDetails: any[] = [];
  total: number = 0;
  discount: number = 0;
  finalTotal: number = 0;
  observations: string = "Presupuesto de prueba 29";
  status: string = "Pendiente";

  constructor(private fb: FormBuilder, private budgetService: BudgetService) {
    this.budgetForm = this.fb.group({
      total: [0],
      discount: [0],
      finalTotal: [0],
      observations: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    this.loadServices(); // Cargar los servicios al iniciar
  }

  loadServices(): void {
    // Obtener los servicios de la API
    this.budgetService.getServices().subscribe(services => {
      this.services = services;
    });
  }

  openModal(): void {
    this.displayModal =! this.displayModal;

  }

  closeModal(): void {
    this.displayModal = false;
  }

  addDetail(detail: any): void {
    // Calcular el costo después de descuento
    const serviceCost = detail.service.cost;
    const discountAmount = (serviceCost * detail.discount) / 100;
    detail.cost = serviceCost - discountAmount;
    detail.service = detail.service.name;
    

    // Agregar el detalle al presupuesto
    this.budgetDetails.push(detail);
    this.calculateTotal();
    this.closeModal();
  }

  calculateFinalTotal(): void {
    // Calculamos el total de los detalles (suma de los costos de los detalles)
    this.total = this.budgetDetails.reduce((sum, detail) => sum + detail.cost, 0);
  
    // Calculamos el final total aplicando el descuento global sobre el total
    this.finalTotal = this.total - (this.discount * this.total) / 100;
  
    // Actualizamos los valores en el formulario
    this.budgetForm.patchValue({
      total: this.total,
      finalTotal: this.finalTotal
    });
  }
  

  calculateTotal(): void {
    this.total = this.budgetDetails.reduce((sum, detail) => sum + detail.cost, 0);
    this.finalTotal = this.total - (this.discount * this.total) / 100;
    this.budgetForm.patchValue({
      total: this.total,
      finalTotal: this.finalTotal
    });
  }

  submitForm(): void {
    const budgetData = {
      total: this.total,
      discount: this.discount,
      finalTotal: this.finalTotal,
      observations: this.observations,
      status: this.status,
      budgetDetails: this.budgetDetails
    };
    console.log(budgetData);
  }
}
