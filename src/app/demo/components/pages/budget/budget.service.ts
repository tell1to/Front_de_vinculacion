import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {
  private apiUrl = environment.api;

  constructor() {}

  getServices(): Observable<any> {    
      const response = axios.get(`${this.apiUrl}services`,);
      return from(response.then(res => res.data));
  }
}
