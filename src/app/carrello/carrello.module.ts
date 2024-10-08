import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrelloRoutingModule } from './carrello-routing.module';
import { CarrelloScarpeComponent } from './carrello-scarpe/carrello-scarpe.component';
import { CardScarpaCarrelloComponent } from './card-scarpa-carrello/card-scarpa-carrello.component';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabellaComponent } from '../tabella/tabella.component';



@NgModule({
  declarations: [
    CarrelloScarpeComponent,
    CardScarpaCarrelloComponent
  ],
  imports: [
    CommonModule,
    CarrelloRoutingModule,
    AccordionModule,
    FormsModule,
    ButtonModule,
    ReactiveFormsModule,
    TabellaComponent
  ]
})
export class CarrelloModule { }
