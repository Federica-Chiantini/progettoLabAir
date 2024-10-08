import { Component } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';
import { IScarpaSelezionata } from '../../models/scarpe';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-carrello-scarpe',
  templateUrl: './carrello-scarpe.component.html',
  styleUrl: './carrello-scarpe.component.css'
})
export class CarrelloScarpeComponent {

  prodottiACarrello : IScarpaSelezionata[] = [] //prodotti a carrello
  prezzo : number = 0
  spedizione : number = 0

  constructor(public carrello : CarrelloService){}

  ngOnInit(){
    this.aggiorna()
  }

  eliminaScarpa(item : IScarpaSelezionata){ //elimina scarpa da output della card scarpa
    let scarpa = this.prodottiACarrello.findIndex( s => s === item)
    this.prodottiACarrello.splice(scarpa, 1)
    return this.aggiorna()
  }

  aggiorna(){
    this.prodottiACarrello = this.carrello.carrelloScarpe
    this.prezzo = this.carrello.carrelloScarpe
    .map(prodotto => prodotto.prezzo * prodotto.quantita)  // Moltiplica prezzo per quantità
    .reduce((accumulatore, prezzoTotaleProdotto) => accumulatore + prezzoTotaleProdotto, 0);  // Somma tutti i totali

    this.spedizionePrezzo()
  }

  modificaQuantita(numero : number, scarpa : IScarpaSelezionata){ //modifica quantita da output della card scarpa
    let s = this.prodottiACarrello.findIndex( s => s === scarpa)
    this.prodottiACarrello[s].quantita = numero
    return this.aggiorna()
  }

  spedizionePrezzo(){
  if(sessionStorage.getItem("Token") === null){ //se non e' autenticato paga la spedizione
    this.spedizione = 50
  }

  if(this.carrello.carrelloScarpe.length === 0 || sessionStorage.getItem('Token')){
    this.spedizione = 0    
  }
}

}
