import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhonComponent } from './phon.component';

describe('PhonComponent', () => {
  let component: PhonComponent;
  let fixture: ComponentFixture<PhonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
