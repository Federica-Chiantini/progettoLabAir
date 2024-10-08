import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IScarpaSelezionata } from '../../models/scarpe';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-scarpa-carrello',
  templateUrl: './card-scarpa-carrello.component.html',
  styleUrl: './card-scarpa-carrello.component.css'
})
export class CardScarpaCarrelloComponent {
  @Input()
  cardScarpa ?: IScarpaSelezionata

  @Output()
  scarpaDaEliminare = new EventEmitter<IScarpaSelezionata>();

  @Output()
  quantita = new EventEmitter<number>();
  
  select = new FormControl(1, {nonNullable: true}) //quantita della scarpa, parte da 1 sino a 5

  elimina(item : IScarpaSelezionata){
    this.scarpaDaEliminare.emit(item)
  }

  modificaQuantita(select : FormControl, scarpa : IScarpaSelezionata){
    this.quantita.emit(this.select.value)
  }
}
