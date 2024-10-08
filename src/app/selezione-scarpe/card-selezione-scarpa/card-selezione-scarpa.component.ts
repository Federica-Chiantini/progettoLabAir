import { Component, Input } from '@angular/core';
import { IScarpaNike } from '../../models/scarpe';
import { NikeService } from '../../services/nike.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-selezione-scarpa',
  templateUrl: './card-selezione-scarpa.component.html',
  styleUrl: './card-selezione-scarpa.component.css'
})
export class CardSelezioneScarpaComponent {
  @Input()
  s ?: IScarpaNike

  constructor(private nikeService : NikeService, private router : Router){}

  apriDettaglioScarpa(numero : number){ //metodo per avere id e aprire dettaglio scarpa
    let stringa : string = numero as unknown as string
    this.nikeService.TrovaScarpaPerId(stringa).subscribe({
      next: scarpa => {console.log(scarpa), this.router.navigate(['/scarpe/id', stringa])},
      error: e => console.log(e)
    })
  }
}
