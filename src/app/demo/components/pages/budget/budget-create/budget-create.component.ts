import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BudgetService } from '../budget.service';
import { Budget, BudgetDetail } from '../budget.model';
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
    budgetDetails: []
  };

  budgetDetail: BudgetDetail = {
    service: '',
    discount: 0,
    observations: '',
    cost: 0
  };

  displayModal: boolean = false;

  statusOptions = [
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'Aprobado', value: 'aprobado' },
    { label: 'Rechazado', value: 'rechazado' }
  ];

  services: any[] = [];
  selectedService: any;

  constructor(
    private budgetService: BudgetService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getServices();
  }

  onSubmit(): void {
    this.budgetService.createBudget(this.budget).then(() => {
      this.router.navigate(['/budgets']);
    });
  }

  async getServices() {
    try {
      const response = await axios.get(`${this.apiUrl}`);
      this.services = response.data.map((service: any) => ({
        label: service.name,
        value: { id: service.id, cost: service.cost }
      }));
    } catch (error) {
      console.error('Error fetching services', error);
    }
  }

  showModal() {
    this.displayModal = true;
  }

  hideModal() {
    this.displayModal = false;
  }

  onServiceChange() {
    if (this.selectedService) {
      this.budgetDetail.service = this.selectedService.label;
      this.budgetDetail.cost = this.selectedService.value.cost - (this.budgetDetail.discount || 0);
      this.calculateTotal();
    }
  }

  calculateTotal() {
    const serviceCost = this.budgetDetail.cost || 0;
    const discountAmount = this.budgetDetail.discount || 0;
    this.budgetDetail.cost = serviceCost - discountAmount;
  }

  addDetail() {
    this.budget.budgetDetails.push({ ...this.budgetDetail });
    this.calculateBudgetTotal();
    this.hideModal();
    this.resetBudgetDetail();
  }

  calculateBudgetTotal() {
    this.budget.finalTotal = this.budget.budgetDetails.reduce((acc, detail) => acc + detail.cost, 0);
  }

  resetBudgetDetail() {
    this.budgetDetail = {
      service: '',
      discount: 0,
      observations: '',
      cost: 0
    };
    this.selectedService = null;
  }
}
