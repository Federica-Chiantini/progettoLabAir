import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IfotoScarpa } from '../models/foto';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private http : HttpClient) { }

  trovaGalleriaScarpa(id : number) : Observable <IfotoScarpa>{ 
    return this.http.get<IfotoScarpa>( environment.apiFotoScarpe + `/${id}`)
  }

}
