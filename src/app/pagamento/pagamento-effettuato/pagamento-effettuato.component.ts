import { Component } from '@angular/core';


@Component({
  selector: 'app-pagamento-effettuato',
  templateUrl: './pagamento-effettuato.component.html',
  styleUrl: './pagamento-effettuato.component.css'
})
export class PagamentoEffettuatoComponent {

  numeroOrdine : number = Math.floor(Math.random() * 10000) //per avere un numero random di ordine
  
}
