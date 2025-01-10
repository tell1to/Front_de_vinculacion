export interface BudgetDetail {
  service: string;
  discount: number;
  observations: string;
  cost: number;
}

export interface Budget {
  id: string;
  total: number;
  discount: number;
  finalTotal: any;
  observations: string;
  status: string;
  budgetDetails: BudgetDetail[];
}
