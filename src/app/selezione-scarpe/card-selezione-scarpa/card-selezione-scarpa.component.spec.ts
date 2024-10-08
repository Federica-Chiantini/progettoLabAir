import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelezioneScarpaComponent } from './card-selezione-scarpa.component';

describe('CardSelezioneScarpaComponent', () => {
  let component: CardSelezioneScarpaComponent;
  let fixture: ComponentFixture<CardSelezioneScarpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSelezioneScarpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardSelezioneScarpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
