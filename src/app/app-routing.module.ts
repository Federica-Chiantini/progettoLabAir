import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './login/login/login.component';
import { AreaUtenteComponent } from './login/area-utente/area-utente.component';
import { AccediProfiloUtenteGuard } from './guards/accedi-profilo-utente.guard';
import { PaginaNonTrovataComponent } from './components/pagina-non-trovata/pagina-non-trovata.component';


const routes: Routes = [
  {path: '', component: HomepageComponent}, 
  { path:'scarpe',
    loadChildren: () => import("./selezione-scarpe/selezione-scarpe.module").then(m => m.SelezioneScarpeModule)
  },
  { path:'carrello',
    loadChildren: () => import("./carrello/carrello.module").then(m => m.CarrelloModule)
  },
  { path:'pagamento',
    loadChildren: () => import("./pagamento/pagamento.module").then(m => m.PagamentoModule)
  },
  { path: 'login', component: LoginComponent},
  { path: 'area-utente', 
    canActivate: [AccediProfiloUtenteGuard],
    component: AreaUtenteComponent},
    { path: '**', component: PaginaNonTrovataComponent } //wildcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
