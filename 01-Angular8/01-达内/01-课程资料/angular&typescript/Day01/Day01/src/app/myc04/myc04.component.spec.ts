import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc04Component } from './myc04.component';

describe('Myc04Component', () => {
  let component: Myc04Component;
  let fixture: ComponentFixture<Myc04Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc04Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
