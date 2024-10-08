import { Component, Input } from '@angular/core';
import { IScarpaSelezionata } from '../models/scarpe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-scarpa-carrello',
  standalone: true, //COMPONENTE STANDALONE
  imports: [CommonModule], //solo cosí mi funzionano le pipes nel template
  templateUrl: './card-scarpa-carrello.component.html',
  styleUrl: './card-scarpa-carrello.component.css'
})
export class CardScarpaCarrelloComponent {

  @Input()
  item ?: IScarpaSelezionata
}
