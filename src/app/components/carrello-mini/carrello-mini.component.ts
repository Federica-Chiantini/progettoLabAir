import { Component } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-carrello-mini',
  templateUrl: './carrello-mini.component.html',
  styleUrl: './carrello-mini.component.css'
})
export class CarrelloMiniComponent {

  constructor(public carrello : CarrelloService){}

  chiudiFinestra(){
    this.carrello.apriFinestra = false //chiude popup
  }
}
