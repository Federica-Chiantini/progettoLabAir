import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApriChiudiMenuService {

  finestraAperta : boolean = false //apre il sottomenu
  nomeCategoriaMenu : string = "nessuna" //indica quale sottomenu aprire

}
