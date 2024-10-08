import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaScarpeComponent } from './lista-scarpe/lista-scarpe.component';
import { RicercaScarpeFiltrataComponent } from './ricerca-scarpe-filtrata/ricerca-scarpe-filtrata.component';
import { ScarpaSelezionataComponent } from './scarpa-selezionata/scarpa-selezionata.component';




const routes: Routes = [
  {path: '', component: ListaScarpeComponent},
  { path:'nuovi-arrivi', component: RicercaScarpeFiltrataComponent,
  }, 
  { path:'best-seller', component: RicercaScarpeFiltrataComponent
  }, 
  { path:'categoria/:nome', component: RicercaScarpeFiltrataComponent
  }, 
  { path:'modello/:nome', component: RicercaScarpeFiltrataComponent
  },
    {path: 'id/:id', component: ScarpaSelezionataComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelezioneScarpeRoutingModule { }
