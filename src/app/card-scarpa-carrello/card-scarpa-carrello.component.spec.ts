import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScarpaCarrelloComponent } from './card-scarpa-carrello.component';

describe('CardScarpaCarrelloComponent', () => {
  let component: CardScarpaCarrelloComponent;
  let fixture: ComponentFixture<CardScarpaCarrelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardScarpaCarrelloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardScarpaCarrelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
