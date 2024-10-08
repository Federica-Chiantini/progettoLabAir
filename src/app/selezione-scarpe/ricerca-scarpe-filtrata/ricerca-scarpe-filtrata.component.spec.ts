import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RicercaScarpeFiltrataComponent } from './ricerca-scarpe-filtrata.component';

describe('RicercaScarpeFiltrataComponent', () => {
  let component: RicercaScarpeFiltrataComponent;
  let fixture: ComponentFixture<RicercaScarpeFiltrataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RicercaScarpeFiltrataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RicercaScarpeFiltrataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
