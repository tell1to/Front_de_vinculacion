export interface Budget {
    id: string;
    total: number;
    discount: number;
    finalTotal: number;
    observations: string;
    status: string;
    services?: string;
    createdAt: Date;
    updatedAt: Date;
  }
  