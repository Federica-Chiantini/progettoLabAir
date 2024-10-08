import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagamentoSpedizioneComponent } from './pagamento-spedizione.component';

describe('PagamentoSpedizioneComponent', () => {
  let component: PagamentoSpedizioneComponent;
  let fixture: ComponentFixture<PagamentoSpedizioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagamentoSpedizioneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagamentoSpedizioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
