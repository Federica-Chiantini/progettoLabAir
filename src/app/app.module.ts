import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { NavbarHeaderComponent } from './components/navbar-header/navbar-header.component';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { SelezioneScarpeModule } from './selezione-scarpe/selezione-scarpe.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarrelloMiniComponent } from './components/carrello-mini/carrello-mini.component';
import { CardModule } from 'primeng/card';
import { FooterComponent } from './components/footer/footer.component';
import { CarrelloModule } from './carrello/carrello.module';
import { AutorizzazioneRichiesteInterceptor } from './autorizzazione-richieste.interceptor';
import { ScarpaSelezionataComponent } from './selezione-scarpe/scarpa-selezionata/scarpa-selezionata.component';
import { PagamentoModule } from './pagamento/pagamento.module';
import { PaginaNonTrovataComponent } from './components/pagina-non-trovata/pagina-non-trovata.component';
import { LoginModule } from './login/login.module';
import { CardScarpaCarrelloComponent } from './card-scarpa-carrello/card-scarpa-carrello.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    NavbarHeaderComponent,
    ScarpaSelezionataComponent,
    CarrelloMiniComponent,
    FooterComponent,
    PaginaNonTrovataComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SelezioneScarpeModule,
    FormsModule,
    CardModule,
    CarrelloModule,
    PagamentoModule,
    LoginModule,
    CardScarpaCarrelloComponent
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    { provide: HTTP_INTERCEPTORS, useClass: AutorizzazioneRichiesteInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
