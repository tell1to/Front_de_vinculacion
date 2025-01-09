import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from './budget.model';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = 'http://localhost:3000/budgets';

  constructor(private http: HttpClient) {}

  getBudgets(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.apiUrl);
  }

  getBudget(id: string): Observable<Budget> {
    return this.http.get<Budget>(`${this.apiUrl}/${id}`);
  }

  createBudget(budget: Budget): Observable<Budget> {
    return this.http.post<Budget>(this.apiUrl, budget);
  }

  updateBudget(id: string, budget: Budget): Observable<Budget> {
    return this.http.patch<Budget>(`${this.apiUrl}/${id}`, budget);
  }

  deleteBudget(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
