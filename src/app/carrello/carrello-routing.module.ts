import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrelloScarpeComponent } from './carrello-scarpe/carrello-scarpe.component';

const routes: Routes = [
  { path: '', component: CarrelloScarpeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarrelloRoutingModule { }
