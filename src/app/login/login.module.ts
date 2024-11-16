import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { AreaUtenteComponent } from './area-utente/area-utente.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CardScarpaCarrelloComponent } from '../card-scarpa-carrello/card-scarpa-carrello.component';
import { TabellaComponent } from "../tabella/tabella.component";


@NgModule({
  declarations: [
    AreaUtenteComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    CardScarpaCarrelloComponent,
    TabellaComponent
]
})
export class LoginModule { }
