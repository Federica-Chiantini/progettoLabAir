import { Component } from '@angular/core';
import { CarrelloService } from '../../services/carrello.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PagamentoService } from '../../services/pagamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-acquisto',
  templateUrl: './form-acquisto.component.html',
  styleUrl: './form-acquisto.component.css'
})
export class FormAcquistoComponent {

  PagamentoChiuso : boolean = true //chiuso form pagamento
  selectedCategory: any = null;
  totale : number = 0

  //categorie per carta
  categories: any[] = [
      { name: 'Carta di credito o debito', key: 'C' },
      { name: 'Paypal', key: 'P' },
      { name: 'GooglePay', key: 'G' }
  ];


  formDaInviare : FormGroup = new FormGroup({
    formIndirizzo : new FormGroup({
      nome : new FormControl("", [Validators.required, Validators.minLength(3)]),
      cognome : new FormControl("", [Validators.required, Validators.minLength(4)]),
      indirizzo : new FormGroup({
        via : new FormControl("", [Validators.required, Validators.minLength(6)]),
        cap : new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{5}$/)]),
        citta : new FormControl("", [Validators.required, Validators.minLength(2)]),
        provincia : new FormControl("", [Validators.required, Validators.maxLength(2)]),
        nazione : new FormControl("", Validators.minLength(2)),
      }),
      email : new FormControl("", Validators.required),
      tel : new FormControl("", [Validators.required, Validators.pattern(/^(\((00|\+)39\)|(00|\+)39)?(38[890]|34[7-90]|36[680]|33[3-90]|32[89])\d{7}$/)])
    }),
    formCarta : new FormGroup({
      numero : new FormControl(undefined, [Validators.required, Validators.pattern(/^:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}/)]),
      data : new FormControl(undefined, [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/)]),
      ccv : new FormControl(undefined, [Validators.required, Validators.pattern(/^[0-9]{3}$/)])
    })
  })

  constructor(public carrello : CarrelloService, private pagamento : PagamentoService, private router : Router, private ar : ActivatedRoute){}

  ngOnInit() {
      if(sessionStorage.getItem('Token') !== null){
        // Crea un oggetto con i valori presi da sessionStorage
        const datiUtente: { [key: string]: string } = {};
        const campi = ['nome', 'cognome', 'password', 'email', 'tel', 'via', 'cap', 'citta', 'provincia', 'nazione'];

        campi.forEach(campo => {
          datiUtente[campo] = sessionStorage.getItem(campo) || '';  // Imposta un valore vuoto se il campo non esiste
        });

        // Applica i dati al form
      this.UtenteForm.patchValue(datiUtente);
      this.indirizzoForm.patchValue(datiUtente);  // Se i campi coincidono
      }

      this.selectedCategory = this.categories[1]; //parte con carta paypale come prima categoria selezionata

      this.formDaInviare.get('formCarta')!.disable() //se non si compila il form indirizzo non apre quello della carta
  }

  get UtenteForm() {
    return this.formDaInviare.get('formIndirizzo') as FormGroup;
  }
  get indirizzoForm() {
    return this.formDaInviare.get('formIndirizzo.indirizzo') as FormGroup;
  }
  get PagamentoForm() {
    return this.formDaInviare.get('formCarta') as FormGroup;
  }

  pagamentoSelezionato(categoria : string){ //abilita form carta se viene selezionata la voce corretta
    if(categoria === "Carta di credito o debito"){
      this.formDaInviare.get('formCarta')!.enable()
    }else{
      this.formDaInviare.get('formCarta')!.disable()
    }
  }

  ApriPagamento(){ //apre form pagamento
    this.PagamentoChiuso = false
  }

  inviaForm(){
    this.pagamento.aggiungiOrdine(this.formDaInviare.value).subscribe({
      next: (c) => {this.router.navigateByUrl("pagamento/confermato")},
      error: (e) => {console.log("no")}
    })
  }
}
