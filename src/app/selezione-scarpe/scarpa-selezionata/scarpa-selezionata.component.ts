import { Component } from '@angular/core';
import { IScarpaNike, IScarpaSelezionata } from '../../models/scarpe';
import { IfotoScarpa } from '../../models/foto';;
import { NikeService } from '../../services/nike.service';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../../services/photos.service';
import { CarrelloService } from '../../services/carrello.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-scarpa-selezionata',
  templateUrl: './scarpa-selezionata.component.html',
  styleUrl: './scarpa-selezionata.component.css'
})
export class ScarpaSelezionataComponent {
  
  scarpa ?: IScarpaNike
  galleria ?: IfotoScarpa 

  indiceScarpa : number = 0 //indice scarpa per trovare la galleria della scarpa per colore e visualizzarla

  tagliaSelezionata : string = ""
  coloreScelto : string = ""
  selezionata : boolean = false //indica se e' stata selezionata una taglia

  visualizzaVideo : boolean = false
  imgDefault : string = "" //img grande

  //sottoiscrizioni
  sottoiscrizioneParametro : Subscription = new Subscription


  constructor(private nikeService : NikeService, public carrello : CarrelloService, private photos : PhotosService, private ar : ActivatedRoute){}

  ngOnInit(){
    this.sottoiscrizioneParametro.add(this.ar.params.subscribe(
      p => {
      let param = p['id']

      this.nikeService.TrovaScarpaPerId(param).subscribe({
        next : (s) => {this.scarpa = s},
        error : (e) => {console.log(e)}
      })

      this.photos.trovaGalleriaScarpa(param).subscribe({ //tramite id cerca le foto di quella scarpa
        next : (g) => {this.galleria = g, this.imgDefault = g.colori[this.indiceScarpa].fotoCopertina},
        error : (e) => {console.log(e)}
      })
    }
    ))
  }

  ngOnDestroy(){
    this.sottoiscrizioneParametro!.unsubscribe()
  }

  cambiaColoreScarpa(index : number, nuovoLink : string){ //cliccando su immagine scarpa piccina cambio colore della gallery
    this.indiceScarpa = index,
    this.imgDefault = nuovoLink
  }

  selezionaTaglia(taglia : string){
    this.selezionata = true
    this.tagliaSelezionata = taglia
  }


  elementoAggiuntoACarrello(scarpa : IScarpaNike){
    let {taglie_disponibili, colori_disponibili, ...s} = this.scarpa! //destrutturazione del oggetto e spread operator per creare un nuovo oggetto con solo le chiavi-valori che mi servono

    let scarpaS : IScarpaSelezionata = {... scarpa, colore: this.coloreScelto, taglia: this.tagliaSelezionata, quantita: 1} //assegno ad un secondo oggetto i valori che mi servono e aggiungo quelli mancanti

    this.carrello.aggiungiACarrello(scarpaS)
  }

    cambiaImmagineGrande(link : string){ //cambia immagine grande
      this.visualizzaVideo=false
      this.imgDefault = link
    }

    cambiaInVideo(){ //inserisce il video nell'immagine grande
      this.visualizzaVideo=true
    }
}
