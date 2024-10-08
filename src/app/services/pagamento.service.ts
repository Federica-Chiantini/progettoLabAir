import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INuovoOrdine } from '../models/spedizione';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  constructor(private http : HttpClient) {}

  aggiungiOrdine(ordineCompleto : INuovoOrdine) : Observable<INuovoOrdine>{
    return this.http.post<INuovoOrdine>(environment.apiSpedizione, ordineCompleto)
  }
}
