export interface BudgetDetail {
  service: string;
  discount: number;
  observations: string;
  cost: number;
}

export interface Budget {
  total: number;
  discount: number;
  finalTotal: number;
  observations: string;
  status: string;
  budgetDetails: BudgetDetail[];
}
