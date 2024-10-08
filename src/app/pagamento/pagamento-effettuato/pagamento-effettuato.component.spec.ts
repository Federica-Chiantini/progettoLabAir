import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoEffettuatoComponent } from './pagamento-effettuato.component';

describe('PagamentoEffettuatoComponent', () => {
  let component: PagamentoEffettuatoComponent;
  let fixture: ComponentFixture<PagamentoEffettuatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagamentoEffettuatoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoEffettuatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
