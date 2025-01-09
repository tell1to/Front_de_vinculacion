import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import axios, {AxiosInstance} from 'axios';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private axiosClient: AxiosInstance
  constructor() {this.axiosClient=axios.create({baseURL:environment.api})}


  async login(credentials: { email: string; password: string }) {
    try {
      const response = await this.axiosClient.post('auth/login', credentials);
      return response.data;
    } catch (error) {
      if (error.response) {
        
        console.error('Error en la respuesta:', error.response.data);
      } else if (error.request) {
        
        console.error('No se recibió respuesta:', error.request);
      } else {
        console.error('Error al configurar la solicitud:', error.message);
      }
      throw error;
    }
  }
}

