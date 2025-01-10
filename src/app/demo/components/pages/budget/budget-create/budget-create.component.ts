import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../budget.service';
import { Budget } from '../budget.model';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Component({
  selector: 'app-budget-create',
  templateUrl: './budget-create.component.html',
  styleUrls: ['./budget-create.component.scss']
})

export class BudgetCreateComponent implements OnInit {
  private apiUrl = environment.api + 'services';

  budget: Budget = {
    id: '',
    total: 0,
    discount: 0,
    finalTotal: 0,
    observations: '',
    status: '',
    services: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  statusOptions = [
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'Aprobado', value: 'aprobado' },
    { label: 'Rechazado', value: 'rechazado' }
  ];

  services: any[] = [];

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getServices();
  }

  onSubmit(): void {
    console.log(this.budget);  // Imprime el objeto budget en la consola
    this.budgetService.createBudget(this.budget).subscribe(() => {
      this.router.navigate(['/budgets']);
    });
  }
  

  async getServices() {
    
    try {
      const response = await axios.get(`${this.apiUrl}`);
      this.services = response.data.map((service: any) => ({
        label: service.name,
        value: service.id
      }));
    } catch (error) {
      console.error('Error fetching services', error);
    }
  }
  showBudget(): void {
    console.log(this.budget);
  }
}
