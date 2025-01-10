import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Budget } from './budget.model';
import { environment } from 'src/environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = environment.api + '/budgets';

  async getBudget() {
    const response=await axios.post(`${this.apiUrl}`);
    console.log(response.data);
    return response.data
  }
  async deleteBudget(id:any) {
    const response=await axios.post(`${this.apiUrl}, {id}`);
    console.log(response.data);
    return response.data
  }
  
  

  async createBudget(budget: Budget) {
    const response=await axios.post(`${this.apiUrl}, {budget}`);
    console.log(response.data);
    return response.data
  }

  async getservice( ){
    const service=await axios.get(`${this.apiUrl}`);
    console.log(service.data);
    return service.data;}
}
