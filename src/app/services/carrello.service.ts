import { Injectable } from '@angular/core';
import { IScarpaSelezionata } from '../models/scarpe';

@Injectable({
  providedIn: 'root'
})
export class CarrelloService {

  carrelloScarpe : IScarpaSelezionata[] = [] //carrello
  scarpaEsistente ?: IScarpaSelezionata //controlla se ci sta gia' un doppione della scarpa
  apriFinestra : boolean = false //apre carrello popup

  constructor() { }

  aggiungiACarrello(item : IScarpaSelezionata){
    this.scarpaEsistente = this.carrelloScarpe.find(s => s === item)

    if(!this.scarpaEsistente){ //se non trova nessuna corrispondenza
      this.carrelloScarpe.push(item)
    }else{ 
      const esiste = this.carrelloScarpe.some(i => 
        i.taglia === item.taglia && i.colore === item.colore
      ); //verifica se e' presente la stessa scarpa
      if (!esiste) {
        this.carrelloScarpe.push(item);
      } else { //se la trova aggiunge +1 alla quantita'
        let esistente = this.carrelloScarpe.find(i => 
          i.taglia === item.taglia && i.colore === item.colore
        );
        esistente!.quantita += item.quantita
      }
     }
      
      this.apriFinestra = true
    }
}
