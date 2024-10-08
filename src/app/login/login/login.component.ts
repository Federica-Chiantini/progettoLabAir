import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { IUtente } from '../../models/utente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    redirectTo : string = "" //rimanda a una pagina
    vecchioUtente : boolean = true
    formInviato : boolean = false
    messaggio : string = "" //messaggio errore
    datiUtente ?: IUtente | any //dati user a cui ho dato any per fare il ciclo a riga 54
  
    loginForm : FormGroup = new FormGroup({ //form di autenticazione vecchio utente
      email : new FormControl("", [Validators.required, Validators.email]),
      password : new FormControl("", [Validators.required, Validators.minLength(4)])
    })
  
    formNuovoUtente : FormGroup = new FormGroup({ //form creazione nuovo utente
        nome : new FormControl("", [Validators.required, Validators.minLength(3)]),
        cognome : new FormControl("", [Validators.required, Validators.minLength(4)]),
        password : new FormControl("", [Validators.required, Validators.minLength(4)]),
        email : new FormControl("", [Validators.required, Validators.email]),
        tel : new FormControl("", [Validators.required, Validators.pattern(/^(\((00|\+)39\)|(00|\+)39)?(38[890]|34[7-90]|36[680]|33[3-90]|32[89])\d{7}$/)]),
        via : new FormControl("", [Validators.required, Validators.minLength(6)]),
        cap : new FormControl("", [Validators.required, Validators.pattern(/^[0-9]{5}$/)]),
        citta : new FormControl("", [Validators.required, Validators.minLength(2)]),
        provincia : new FormControl("", [Validators.required, Validators.maxLength(2)]),
        nazione : new FormControl("", Validators.minLength(2))
      })
  
    constructor(private login : LoginService, private router : Router) { }
  
    cambiaProfilo(){ //permette di cambiare tra sezione autenticazione a sezione creazione utente e viceversa
      this.vecchioUtente = !this.vecchioUtente
      this.formInviato = false
    }

    rispostaAffermativa(){ //azioni che si compiono in caso di risposta affermativa nell'autenticazione o creazione
      //sessionStorage.setItem("token", "user") //token per autenticazione guards di protezione di pagina profilo utente
      this.login.login() // voce menu da "accedi" -> "utente"
      this.router.navigateByUrl('area-utente')
    }

    aggiuntiInformazioni(){ //salva informazioni nel sessionStorage
  const campi = ['nome', 'cognome', 'email', 'tel', 'via', 'cap', 'citta', 'provincia', 'nazione'];

  campi.forEach(campo => { //itera array campi che ha le stesse voci della scheda utente
  const valoreForm = this.formNuovoUtente.get(campo)?.value;
  const valoreDatiUtente = this.datiUtente?.[campo];
  sessionStorage.setItem(campo, valoreForm || valoreDatiUtente || ''); //prende o valore del form formNuovoUtente o i dati salvati di un utente gia' registrato
    })
    }

    rispostaNegativa(par : string){ //cambia messaggio in base a autenticazione/registrazione
      this.formInviato = true

      this.messaggio = par === "non trovato" ? "Utente non trovato, riprova di nuovo" : "Registrazione non avvenuta, riprova di nuovo";
    }

    trovaUtente(){
      this.login.AccediConEmail({ email: this.loginForm.get("email")!.value, password: this.loginForm.get("password")!.value}).subscribe(   
          {
            next: ok => {
              this.login.OttieniDettagliUtente().subscribe({ //prende dettagli utente
                next : (d) => { 
                  this.login.inserisciToken("utente")
                  this.filtraListaDettagliUtente(d),
                  this.rispostaAffermativa(),
                  this.aggiuntiInformazioni()
                },
                error : (e) => {console.log(e)}
              })
            },
            error: no => {
              this.rispostaNegativa("non trovato")
            }
          }
            ) 
          }
  
      get formAggiungiUtente(){ //getter per registrare informazioni utente con tipo IUtente
        return this.formNuovoUtente.value as IUtente   
      }
  
    registraUtente(){
      const dati : IUtente = this.formAggiungiUtente
      this.login.RegistraUtente(dati).subscribe(
        {
          next:  ok => {
             this.login.RegistraDettagliUtente(dati).subscribe({
              next : (c) => { this.rispostaAffermativa(), this.aggiuntiInformazioni(), this.login.inserisciToken("utente")},
              error : (e) => { console.log(e)}
            })
          },
          error: no => {
            this.rispostaNegativa("registrazione non avvenuta")
            console.log(no)
          }
        }
      )
    }

    filtraListaDettagliUtente( utenti : IUtente[]){
      this.datiUtente = utenti.find( (e) => e.email === this.loginForm.get("email")!.value) //prende dettagli utente
    }
  }
