import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAcquistoComponent } from './form-acquisto.component';

describe('FormAcquistoComponent', () => {
  let component: FormAcquistoComponent;
  let fixture: ComponentFixture<FormAcquistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormAcquistoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAcquistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
