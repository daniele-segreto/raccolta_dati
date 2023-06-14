import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private apiUrl = 'http://localhost:8000/api'; // Sostituisci con l'URL del tuo backend Laravel

  constructor(private http: HttpClient) { }

  // Metodo per aggiungere un utente al backend
  addUser(userData: any) {
    return this.http.post(`${this.apiUrl}/users`, userData);
  }
}
