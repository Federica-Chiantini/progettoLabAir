import { Component } from '@angular/core';
import { IScarpaSelezionata } from '../../models/scarpe';
import { CarrelloService } from '../../services/carrello.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acquisto-scarpa',
  templateUrl: './acquisto-scarpa.component.html',
  styleUrl: './acquisto-scarpa.component.css'
})
export class AcquistoScarpaComponent {
  
  elementiACarrello : IScarpaSelezionata[] = [] //carrello prodotti
  errore = {colore: "red"}

  constructor(private carrello : CarrelloService, private router : Router){}

  ngOnInit(){
    this.elementiACarrello = this.carrello.carrelloScarpe 
  }

  utenteLoggato(){
    if(sessionStorage.getItem('Token') !== null){ //se utente e' autenticato va a pagamento con i dati gia' inseriti
      this.router.navigateByUrl('acquista/user')
    }else{
      this.router.navigateByUrl('login') //naviga a login
    }
  }
}
