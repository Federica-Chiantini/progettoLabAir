import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcquistoScarpaComponent } from './acquisto-scarpa.component';

describe('AcquistoScarpaComponent', () => {
  let component: AcquistoScarpaComponent;
  let fixture: ComponentFixture<AcquistoScarpaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcquistoScarpaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcquistoScarpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
