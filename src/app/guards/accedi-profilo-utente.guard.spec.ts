import { TestBed } from '@angular/core/testing';

import { AccediProfiloUtenteGuard } from './accedi-profilo-utente.guard';

describe('AccediProfiloUtenteGuard', () => {
  let guard: AccediProfiloUtenteGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AccediProfiloUtenteGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
