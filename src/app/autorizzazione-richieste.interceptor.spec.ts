import { TestBed } from '@angular/core/testing';

import { AutorizzazioneRichiesteInterceptor } from './autorizzazione-richieste.interceptor';

describe('AutorizzazioneRichiesteInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutorizzazioneRichiesteInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutorizzazioneRichiesteInterceptor = TestBed.inject(AutorizzazioneRichiesteInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
