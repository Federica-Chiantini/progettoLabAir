import { Component } from '@angular/core';
import { Message } from 'primeng/api';
import { IScarpaNike } from '../../models/scarpe';
import { NikeService } from '../../services/nike.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ricerca-scarpe-filtrata',
  templateUrl: './ricerca-scarpe-filtrata.component.html',
  styleUrl: './ricerca-scarpe-filtrata.component.css'
})
export class RicercaScarpeFiltrataComponent {

  messages : Message[] = [] //NGprime

  scarpe : IScarpaNike[] = []

  //url e titolo che possono variare
  URL ?: string
  titolo ?: string
  quantita : number = 0

  //controlla se e' stata inserita una chiave di ricerca
  chiaveDiRicercaTrovata : boolean = false

  parametroStringa : string | null = "" //usato per la categoria

  //annulla sottoiscrizione
  sottoiscrizioneId ?: Subscription


  constructor(private nikeService : NikeService, private router : Router, private ar : ActivatedRoute){ }

  ngOnInit(){
    this.messages = [{ severity: 'error', detail: 'Nessun prodotto trovato' }], //NGPrime

      this.URL = this.router.url //route attuale

      this.sottoiscrizioneId = this.ar.paramMap.subscribe( //legge il parametro della rotta
        (c) => {
          this.parametroStringa = c.get('nome')
          if(this.chiaveDiRicercaTrovata){
            this.mostraTuttiIProdotti()
          }else{
            this.mostraPerCategoria(this.parametroStringa!)
          }
        }
      )

    switch(this.URL){ //sceglie il metodo in base a url
      case '/scarpe/nuovi-arrivi':
        this.mostraNuoviArrivi()
        this.titolo = "I nuovi arrivi"
        break;
      case '/scarpe/best-seller':
        this.mostraBestSeller()
        this.titolo = "I nostri best seller"
        break;
        case '/scarpe/modello/' + this.parametroStringa:
          this.chiaveDiRicercaTrovata = true
          this.mostraTuttiIProdotti()
          break;
        case '/scarpe/categoria/' + this.parametroStringa:
        this.chiaveDiRicercaTrovata = false
  }

  }

  ngOnDestroy() {
    this.sottoiscrizioneId!.unsubscribe()
  }


  mostraNuoviArrivi(){
  this.nikeService.trovaNuoviArrivi().subscribe({
      next: (na) => {this.scarpe = na, this.quantita = na.length},
      error: (e) => { console.log(e)}})
  }

  mostraBestSeller(){
    this.nikeService.trovaTuttiIprodotti().subscribe(
    {
              next : (s) => {this.scarpe = s.filter( bs => 'best_seller' in bs ), this.quantita = s.length}, //bs.best_seller <= 4
              error : (e) => console.log(e)
            }
  )
}

  mostraTuttiIProdotti(){
    let scarpeFiltrate
    this.nikeService.trovaTuttiIprodotti().subscribe({
      next: (p) => {
        this.scarpe = p,
        this.titolo = `Prodotti trovati con chiave: `,
        scarpeFiltrate = p.filter(product => product.nome.toLowerCase().includes(this.parametroStringa!))
        this.quantita = scarpeFiltrate.length
      },
      error: (e) => {this.scarpe = []}
    })
  }


mostraPerCategoria(parametro : string){
  if(parametro === "TrailRunning"){ //corregge rotta per categoria trail running
      parametro = "Trail%20Running"
      this.titolo = "Tutti i prodotti di categoria Trail Running"
    }else{
              this.titolo = "Tutti i prodotti di categoria" + " " + parametro
    }

    this.nikeService.TrovaScarpePerCategoria(parametro).subscribe({
      next: (p) => {this.scarpe = p, this.quantita = p.length},
      error: (e) => { console.log(e)}
    })
}

}
