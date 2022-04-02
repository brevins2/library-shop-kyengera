import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonePayComponent } from './phone-pay.component';

describe('PhonePayComponent', () => {
  let component: PhonePayComponent;
  let fixture: ComponentFixture<PhonePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonePayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
