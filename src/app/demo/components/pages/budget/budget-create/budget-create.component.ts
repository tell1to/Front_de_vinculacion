import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget.model';

@Component({
  selector: 'app-budget-create',
  templateUrl: './budget-create.component.html',
  styleUrls: ['./budget-create.component.scss']
})
export class BudgetCreateComponent {
  budget: Budget = {
    id: '',
    total: 0,
    discount: 0,
    finalTotal: 0,
    observations: '',
    status: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  statusOptions = [ { label: 'Pendiente', value: 'pendiente' }, 
    { label: 'Aprobado', value: 'aprobado' }, 
    { label: 'Rechazado', value: 'rechazado' } ];

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.budgetService.createBudget(this.budget).subscribe(() => {
      this.router.navigate(['/budgets']);
    });
  }
}
