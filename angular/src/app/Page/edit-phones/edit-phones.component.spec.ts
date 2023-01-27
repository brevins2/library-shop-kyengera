import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPhonesComponent } from './edit-phones.component';

describe('EditPhonesComponent', () => {
  let component: EditPhonesComponent;
  let fixture: ComponentFixture<EditPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPhonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
