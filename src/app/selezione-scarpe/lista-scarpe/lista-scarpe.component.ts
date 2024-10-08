import { Component } from '@angular/core';
import { IScarpaNike } from '../../models/scarpe';
import { ActivatedRoute, Router } from '@angular/router';
import { NikeService } from '../../services/nike.service';
import { Message } from 'primeng/api';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-lista-scarpe',
  templateUrl: './lista-scarpe.component.html',
  styleUrl: './lista-scarpe.component.css',
})
export class ListaScarpeComponent {

  messages : Message[] = [] //NGprime per inserire un messaggio

  scarpe : IScarpaNike[] = [] //lista effettiva che andra' nel componente figlio
  quantita : number = 0
  titolo : string = ""

  //uso dei filtri
  filtroApplicato : boolean = false //indica se ho applicato un filtro
  arrayCategorie : string[] = ['Basket', 'Running', 'Sneakers', 'Trail Running', 'Training'] //array delle categorie
  arrayColori : string[] = [] //array per i colori

  // caricamento prodotti nella pagina
  quantitaProdotti : number = 20
  paginaCorrente : number = 1
  scaricando : boolean = false // per sapere se stiamo caricando dati
  AltriProdotti_inLista : boolean = true // per sapere se ci sono più prodotti

  tuttiIProdotti : IScarpaNike[] = [] //array da usare successivamente alle operazioni di filtraggio

  //filtri del prezzo e colori selezionati
  prezzoMinimo: number = 0;
  prezzoMassimo: number = 1000;
  coloreSelezionato: string = '';

  //regolano popup filtri applicati a colore e prezzo
  filtroPrezzo : boolean = false
  filtroColore : boolean = false

  constructor(private nikeService : NikeService, private router : Router, private ar : ActivatedRoute){ }

  ngOnInit(){
          this.messages = [{ severity: 'error', detail: 'Nessun prodotto trovato' }], //NGPrime messaggio errore

            //recupera tutti i colori
            this.nikeService.trovaTuttiIprodotti().subscribe(
            prodotti => {
              this.tuttiIProdotti = prodotti //prende tutti i prodotti per poi applicare i filtri
            const colori = prodotti.flatMap( c => c.colori_disponibili) //array con tutti i colori presenti nella categoria per i prodotti 
            this.arrayColori = [...new Set(colori)] //elimina i doppioni e crea un array
            }
          )
          

          //array con tutti i prodotti
          this.Carica_Prodotti()
  }

  Carica_Prodotti(){
    if(this.scaricando || !this.AltriProdotti_inLista){ // Se sta già caricando o non ci sono più prodotti, esce dal metodo
      return }

    this.scaricando = true //sta scaricando i prodotti

    this.mostraTuttiIProdotti()
  }


  mostraTuttiIProdotti(){
    this.nikeService.trovaTuttiIprodotti().subscribe(
      s => {this.quantita = s.length, this.titolo = "Tutti i prodotti"}
    )
    this.nikeService.TuttiIprodottiPerPag( this.paginaCorrente, this.quantitaProdotti).subscribe({
      next: (p) => {
        this.scarpe.push(...p),  // Aggiungi i nuovi prodotti a quelli esistenti

        this.scaricando = false //ferma il download dei prodotti

        if (p.length < this.quantitaProdotti) {
          // Se ci sono meno di 20 prodotti, non ci sono più prodotti da caricare
          this.AltriProdotti_inLista = false;
        } else {
          this.paginaCorrente++;  // Altrimenti passa alla pagina successiva
        }},
      error: (e) => { 
        console.log(e),
        this.scaricando = false;  // In caso di errore, ferma il caricamento
      }
    })

    //nessun filtro applicato
    this.filtroColore = false, 
    this.filtroPrezzo=false
  }

  selezionaFiltroNumero(itemMin : number, itemMax : number){
    this.prezzoMinimo = itemMin, 
    this.prezzoMassimo = itemMax, 
    //applicato solo filtro prezzo
    this.filtroPrezzo = true
    this.filtroColore = false
  }

  selezionaFiltroColore(colore : string){
    this.coloreSelezionato = colore
    //applicato solo filtro colore
    this.filtroPrezzo = false
    this.filtroColore = true
  }

  filtraProdotti() {
    //filtri applicati entrambi e scompare finestra
    this.filtroPrezzo = false
    this.filtroColore = false
    this.filtroApplicato = true
    // Filtrare in base ai criteri di prezzo e colore
    const prodottiFiltrati = this.tuttiIProdotti.filter(scarpa => {
      const filtroPrezzo = scarpa.prezzo >= this.prezzoMinimo && scarpa.prezzo <= this.prezzoMassimo;
      //scarpa.prezzo >= this.prezzoMinimo scarpa.rezzo non e' maggiore di this.prezzoMinimo
      //scarpa.prezzo <= this.prezzoMassimo scarpa.rezzo non e' minore di this.prezzoMinimo
      console.log(this.prezzoMassimo)
      const filtroColore = !this.coloreSelezionato || scarpa.colori_disponibili.includes(this.coloreSelezionato);
      //permette di far passare sia tutte le scarpe (primo caso nessun colore selezionato) - solo quelle che includono il colore scelto
      return filtroPrezzo && filtroColore;
    });

        if(this.coloreSelezionato){
      this.titolo = `Lista prodotti di colore ${this.coloreSelezionato}`
      this.quantita = prodottiFiltrati.length
    }else{
      this.titolo = `Lista prodotti tra ${this.prezzoMinimo} - ${this.prezzoMassimo} euro`
      this.quantita = prodottiFiltrati.length
    }

  
    // Reset dell'indice e della paginazione
    this.scarpe = [];
    this.paginaCorrente = 1;
    this.AltriProdotti_inLista = true;
  
    // Caricare i prodotti filtrati (solo la prima pagina)
    this.Carica_Prodotti_Paginati(prodottiFiltrati);
  }

  Carica_Prodotti_Paginati(prodottiFiltrati: IScarpaNike[]) {
    // Definire l'inizio e la fine della pagina corrente
    const startIndex = (this.paginaCorrente - 1) * this.quantitaProdotti; //0
    const endIndex = startIndex + this.quantitaProdotti; //20
  
    // Selezionare i prodotti da mostrare in base all'impaginazione
    const prodottiDaMostrare = prodottiFiltrati.slice(startIndex, endIndex);
  
    // Aggiungere i nuovi prodotti all'array 'scarpe'
    this.scarpe.push(...prodottiDaMostrare);
  
    // Se ci sono meno prodotti rispetto alla quantità richiesta, non ci sono altri prodotti da caricare
    if (prodottiDaMostrare.length < this.quantitaProdotti) {
      this.AltriProdotti_inLista = false;
    } else {
      this.paginaCorrente++; // Incrementare la pagina per la prossima richiesta
      this.Carica_Prodotti()
    }
  }

annullaFiltro(){
  this.filtroApplicato = false;
  this.scarpe = [];
  //this.paginaCorrente = 1;
  this.AltriProdotti_inLista = true;

  // Caricare la lista completa dei prodotti, 20 per volta
  //this.Carica_Prodotti_Paginati(this.tuttiIProdotti);
  this.mostraTuttiIProdotti()
}

 // Funzione trackBy per identificare univocamente gli elementi tramite id
 trackByFn(index: number, item: any): number {
  return item.id;
}

}
