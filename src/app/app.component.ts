import { Component } from '@angular/core';
import { BackendService } from './services/backend.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData = {
    name: '',
    email: '',
    password: ''
  };

  isFormOpen = false;
  showSuccessMessage: boolean = false;

  constructor(private backendService: BackendService) { }

  submitForm() {
    // Logica per l'invio dei dati del form al backend
    this.backendService.addUser(this.userData).subscribe(
      (response: any) => {
        console.log(response); // Puoi gestire la risposta del backend a tua discrezione
      },
      (error: any) => {
        console.error(error); // Puoi gestire l'errore a tua discrezione
      }
      );

      // Dopo l'invio con successo, mostra il messaggio di successo
      this.showSuccessMessage = true;

      // Resetta i valori dei campi di input
      this.userData = {
        name: '',
        email: '',
        password: ''
      };
    }

    toggleForm() {
      // Logica per aprire/chiudere il Form
      this.isFormOpen = !this.isFormOpen;
    }

  }

