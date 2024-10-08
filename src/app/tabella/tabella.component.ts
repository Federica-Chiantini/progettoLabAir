import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabella',
  standalone: true, //COMPONENTE STANDALONE
  imports: [CommonModule], //solo cosí mi funzionano le pipes nel template
  templateUrl: './tabella.component.html',
  styleUrl: './tabella.component.css'
})
export class TabellaComponent {
  @Input()
  spedizione : number = 0

  @Input()
  prezzo : number = 0
}
