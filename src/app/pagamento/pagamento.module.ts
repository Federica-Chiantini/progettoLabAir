import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoRoutingModule } from './pagamento-routing.module';
import { PagamentoSpedizioneComponent } from '../pagamento/pagamento-spedizione/pagamento-spedizione.component';
import { PagamentoEffettuatoComponent } from '../pagamento/pagamento-effettuato/pagamento-effettuato.component';
import { FormAcquistoComponent } from './form-acquisto/form-acquisto.component';
import { AcquistoScarpaComponent } from './acquisto-scarpa/acquisto-scarpa.component';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { TabellaComponent } from '../tabella/tabella.component';
import { CardScarpaCarrelloComponent } from '../card-scarpa-carrello/card-scarpa-carrello.component';


@NgModule({
  declarations: [
    PagamentoSpedizioneComponent,
    PagamentoEffettuatoComponent,
    FormAcquistoComponent,
    AcquistoScarpaComponent
  ],
  imports: [
    CommonModule,
    PagamentoRoutingModule,
    CardModule,
    ReactiveFormsModule,
    CheckboxModule,
    FormsModule,
    RadioButtonModule,
    ButtonModule,
    AccordionModule,
    TabellaComponent,
    CardScarpaCarrelloComponent
  ]
})
export class PagamentoModule { }
