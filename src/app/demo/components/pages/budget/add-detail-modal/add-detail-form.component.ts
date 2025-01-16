import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-detail-form',
  templateUrl: './add-detail-form.component.html',
  styleUrls: ['./add-detail-form.component.scss']
})
export class AddDetailFormComponent {
  @Input() visible: boolean = false;
  @Input() services: any[] = [];
  @Output() detailAdded = new EventEmitter<any>();
  detailForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.detailForm = this.fb.group({
      service: ['', Validators.required],
      discount: [0, Validators.required],
      observations: ['', Validators.required],
      cost: [0]
    });
  }

  onServiceChange(service: any): void {
    // Al seleccionar un servicio, actualizamos el costo
    if (service) {
      this.calculateCostAfterDiscount(service.cost);
    }
  }

  onDiscountChange(): void {
    // Al cambiar el descuento, recalculamos el costo
    const service = this.detailForm.get('service')?.value;
    if (service) {
      this.calculateCostAfterDiscount(service.cost);
    }
  }

  calculateCostAfterDiscount(serviceCost: number): void {
    const discount = this.detailForm.get('discount')?.value;
    if (serviceCost && discount !== undefined) {
      const discountedCost = serviceCost - (serviceCost * (discount / 100));
      this.detailForm.get('cost')?.setValue(discountedCost);
    }
  }

  onSubmit(): void {
    if (this.detailForm.valid) {
      this.detailAdded.emit(this.detailForm.value);
      this.resetForm();
    }
  }

  resetForm(): void {
    this.detailForm.reset();
    this.detailForm.get('discount')?.setValue(0);
    this.detailForm.get('cost')?.setValue(0);
  }
}
