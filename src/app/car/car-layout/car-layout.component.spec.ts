import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLayoutComponent } from './car-layout.component';

describe('CarLayoutComponent', () => {
  let component: CarLayoutComponent;
  let fixture: ComponentFixture<CarLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
