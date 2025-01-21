import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  private apiUrl = environment.api;

  constructor() {}

  getDoctors(): Observable<any> {    
      const response = axios.get(`${this.apiUrl}doctors`,);
      return from(response.then(res => res.data));
  }
  getPatient(CC:any): Observable<any> {    
    const response = axios.get(`${this.apiUrl}patients/id/${CC}`,);
    return from(response.then(res => res.data));
}
postAppointment(data:any): Observable<any> {    
  const response = axios.post(`${this.apiUrl}appointments`,data);
  return from(response.then(res => res.data));
}
}