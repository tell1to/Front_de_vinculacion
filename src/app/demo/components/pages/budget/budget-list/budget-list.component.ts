import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget.model';

@Component({
  selector: 'app-budget-list',
  templateUrl: './budget-list.component.html',
  styleUrls: ['./budget-list.component.scss']
})
export class BudgetListComponent implements OnInit {
  budgets: Budget[] = [];

  constructor(private budgetService: BudgetService) {}

  ngOnInit(): void {
    this.loadBudgets();
  }

  loadBudgets(): void {
    this.budgetService.getBudget().then((data: Budget[]) => {
      this.budgets = data;
    });
  }

  deleteBudget(id: string): void {
    this.budgetService.deleteBudget(id).then(() => {
      this.loadBudgets();  // Recarga la lista de presupuestos después de eliminar
    });
  }
}
