import { Component} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NikeService } from '../../services/nike.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ApriChiudiMenuService } from '../../services/apri-chiudi-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  Utente : boolean = false //controlla utente se e' autenticato

  constructor(private nikeService : NikeService, private router : Router, private login : LoginService, public apriChiudiFinestra : ApriChiudiMenuService){}

  ngOnInit(){
    this.login.login$.subscribe( //per stato utente e quindi modificare voce menu accendi
      status => {
        this.Utente = status
      })
  }

  MiniMenuCollapse(e : Event, item: string) {
    e.preventDefault()
    this.apriChiudiFinestra.nomeCategoriaMenu = item; //invia nome della voce che ha cliccato per aprire il menu
    this.apriChiudiFinestra.finestraAperta = !this.apriChiudiFinestra.finestraAperta //apre/chiude menu
  }

  cercaPerNome = new FormGroup({
    input : new FormControl("", {nonNullable: true})
  }
  )

  iniziaRicerca(){
    let chiave : string = this.cercaPerNome.get('input')?.value as string
    if(chiave){
      this.router.navigateByUrl('scarpe/modello/' + chiave)
    }
    
  }
}
