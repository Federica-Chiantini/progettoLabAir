import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IScarpaNike } from '../models/scarpe';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class NikeService {

  ricercaScarpePerTitolo ?: string 

  constructor(private http : HttpClient) { }

  TuttiIprodottiPerPag(pag : number, qnt : number) : Observable<IScarpaNike[]> { //solo per caricare tot prodotti per pagina
    return this.http.get<IScarpaNike[]>(`${environment.apiScarpe}?_page=${pag}&_limit=${qnt}` ) 
  }

  trovaTuttiIprodotti() : Observable<IScarpaNike[]> {
    return this.http.get<IScarpaNike[]>(environment.apiScarpe) 
  }

  trovaNuoviArrivi() : Observable<IScarpaNike[]>{
    return this.http.get<IScarpaNike[]>(environment.apiScarpe + "/?nuovo_arrivi=true")
  }

  TrovaScarpePerCategoria(categoria : string) : Observable<IScarpaNike[]>{
    return this.http.get<IScarpaNike[]>(environment.apiScarpe + `?categoria=${categoria}`)
  }

  TrovaScarpaPerId(id : string) : Observable<IScarpaNike>{
    return this.http.get<IScarpaNike>(environment.apiScarpe + `/${id}`)
  }

  }
