import { Component } from '@angular/core';
import { PagamentoService } from '../../services/pagamento.service';
import { CarrelloService } from '../../services/carrello.service';
import { TabellaComponent } from '../../tabella/tabella.component';

@Component({
  selector: 'app-pagamento-spedizione',
  templateUrl: './pagamento-spedizione.component.html',
  styleUrl: './pagamento-spedizione.component.css'
})
export class PagamentoSpedizioneComponent {
  totale : number = 0 

  constructor(private pagamento : PagamentoService, public carrello : CarrelloService){}

  ngOnInit(){
      this.totale = this.carrello.carrelloScarpe
        .map(prodotto => prodotto.prezzo * prodotto.quantita)  // Moltiplica prezzo per quantità
        .reduce((accumulatore, prezzoTotaleProdotto) => accumulatore + prezzoTotaleProdotto, 0);  // Somma tutti i totali
    
  }
}
