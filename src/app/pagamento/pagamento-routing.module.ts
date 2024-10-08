import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcquistoScarpaComponent } from './acquisto-scarpa/acquisto-scarpa.component';
import { PagamentoEffettuatoComponent } from './pagamento-effettuato/pagamento-effettuato.component';
import { PagamentoSpedizioneComponent } from './pagamento-spedizione/pagamento-spedizione.component';

const routes: Routes = [
  { path: '', component: AcquistoScarpaComponent},
  { path: 'confermato', component: PagamentoEffettuatoComponent},
  { path: 'acquista/:utente', component: PagamentoSpedizioneComponent}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagamentoRoutingModule { }
