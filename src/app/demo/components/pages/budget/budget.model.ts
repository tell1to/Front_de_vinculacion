export interface Budget {
  id: string;
  total: number;
  discount: number;
  finalTotal: number;
  observations: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}
