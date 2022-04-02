import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePayComponent } from './movie-pay.component';

describe('MoviePayComponent', () => {
  let component: MoviePayComponent;
  let fixture: ComponentFixture<MoviePayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoviePayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
