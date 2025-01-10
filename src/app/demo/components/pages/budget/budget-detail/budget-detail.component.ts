import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget.model';

@Component({
  selector: 'app-budget-detail',
  templateUrl: './budget-detail.component.html',
  styleUrls: ['./budget-detail.component.scss']
})
export class BudgetDetailComponent implements OnInit {
  budget: Budget | undefined;

  constructor(
    private route: ActivatedRoute,
    private budgetService: BudgetService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.budgetService.getBudget().then((data: Budget) => {
        this.budget = data;
      });
    }
  }
}
