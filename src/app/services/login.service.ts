import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { IUtente, IUtenteAutenticato } from '../models/utente';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginUtente = new BehaviorSubject( sessionStorage.getItem("token") ? true : false) //behaviourSubject usato per controllare e cambiare lo stato voce menu accedi

  login$ = this.loginUtente.asObservable()

  constructor(private http : HttpClient) { }

  AccediConEmail(credentials: { email: string; password: string }) : Observable<{ token: string }>{
    return this.http.post<{ token: string }>(environment.apiLogin, credentials )
  }

  RegistraUtente(body : IUtente) : Observable<IUtente>{
    return this.http.post<IUtente>(environment.apiRegistraUtente, body)
  }

  RegistraDettagliUtente(body : IUtente) : Observable<IUtente>{ //creato per salvare i dati utente in un nuovo file
    return this.http.post<IUtente>(environment.apiUtenteInformazioni, body)
  }

  OttieniDettagliUtente() : Observable<IUtente[]>{ //creato per prelevare i dati utente al login
    return this.http.get<IUtente[]>(environment.apiUtenteInformazioni)
  }

  login(){
    this.loginUtente.next(true) // voce menu "accedi" -> "utente"
  }

  logout(){
    this.loginUtente.next(false) // voce menu "utente" -> "accedi"
  }

  inserisciToken(token : string){
    sessionStorage.setItem('Token', token)
  }
}
