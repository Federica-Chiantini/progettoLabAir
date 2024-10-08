import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';

import { SelezioneScarpeRoutingModule } from './selezione-scarpe-routing.module';
import { ListaScarpeComponent } from './lista-scarpe/lista-scarpe.component';
import { FiltraPerNomePipe } from './pipes/filtra-per-nome.pipe';

import { MessagesModule } from 'primeng/messages';
import { RicercaScarpeFiltrataComponent } from './ricerca-scarpe-filtrata/ricerca-scarpe-filtrata.component';
import { CardSelezioneScarpaComponent } from './card-selezione-scarpa/card-selezione-scarpa.component';




@NgModule({
  declarations: [
    ListaScarpeComponent,
    FiltraPerNomePipe,
    RicercaScarpeFiltrataComponent,
    CardSelezioneScarpaComponent
  ],
  imports: [
    CommonModule,
    SelezioneScarpeRoutingModule,
    MessagesModule
  ]
})
export class SelezioneScarpeModule { }
