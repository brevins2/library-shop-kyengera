import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerPayComponent } from './computer-pay.component';

describe('ComputerPayComponent', () => {
  let component: ComputerPayComponent;
  let fixture: ComponentFixture<ComputerPayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputerPayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerPayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
