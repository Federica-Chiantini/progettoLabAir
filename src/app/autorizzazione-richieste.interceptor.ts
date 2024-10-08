import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AutorizzazioneRichiesteInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(sessionStorage.getItem('Token')  === 'utente'){
      const nuovaRichiesta = request.clone({
        setHeaders: {
          Authorization: `Bearer OK`
        }
      })

      return next.handle(nuovaRichiesta);
    }

    return next.handle(request);
  }
}
