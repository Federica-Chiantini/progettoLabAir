import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelloScarpeComponent } from './carrello-scarpe.component';

describe('CarrelloScarpeComponent', () => {
  let component: CarrelloScarpeComponent;
  let fixture: ComponentFixture<CarrelloScarpeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarrelloScarpeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarrelloScarpeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
