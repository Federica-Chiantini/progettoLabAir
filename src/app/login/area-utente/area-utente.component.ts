import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CarrelloService } from '../../services/carrello.service';

@Component({
  selector: 'app-area-utente',
  templateUrl: './area-utente.component.html',
  styleUrl: './area-utente.component.css'
})
export class AreaUtenteComponent {
    [key: string]: any // Permette l'accesso dinamico a proprietà

    nome : string  = ""
    cognome : string = ""
    email : string = ""
    tel : string = ""
    via : string = ""
    cap : string = ""
    citta : string = ""
    provincia : string = ""
    nazione : string = ""

    campi : string[] = ['nome', 'cognome', 'email', 'tel', 'via', 'cap', 'citta', 'provincia', 'nazione']

    constructor(private router : Router, private login : LoginService, public carrello : CarrelloService){}

    ngOnInit(){
      if(sessionStorage.getItem("nome") !== null){
          this.campi.forEach(campo => { //itera array campi che ha le stesse voci della scheda utente
            this[campo] = sessionStorage.getItem(campo)!;  // Assegna il valore alla proprietà corrispondente
          })
        }
      }


    logoutUtente(){
      sessionStorage.clear()
      this.login.logout()  //cambia voce menu "utente" -> "accedi"
      this.router.navigateByUrl("/")
    }

    pagamento(){
      this.router.navigateByUrl("pagamento/acquista/user")
    }

    vaiACarrello(){
      this.router.navigateByUrl("carrello")
    }
}
