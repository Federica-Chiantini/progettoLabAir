import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ApriChiudiMenuService } from '../../services/apri-chiudi-menu.service';

@Component({
  selector: 'app-navbar-header',
  templateUrl: './navbar-header.component.html',
  styleUrl: './navbar-header.component.css'
})
export class NavbarHeaderComponent {

  constructor(private router : Router, public apriChiudiFinestra : ApriChiudiMenuService ){}

  chiudiMenu(){
    this.apriChiudiFinestra.finestraAperta = !this.apriChiudiFinestra.finestraAperta //apre chiude menu
  }

  chiudiMenuCategoria(nome : string){
    this.apriChiudiFinestra.finestraAperta = !this.apriChiudiFinestra.finestraAperta //apre chiude menu
    this.router.navigateByUrl("scarpe/categoria/" + nome)
  }

}
