import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScarpaSelezionataComponent } from './scarpa-selezionata.component';

describe('ScarpaSelezionataComponent', () => {
  let component: ScarpaSelezionataComponent;
  let fixture: ComponentFixture<ScarpaSelezionataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScarpaSelezionataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScarpaSelezionataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
