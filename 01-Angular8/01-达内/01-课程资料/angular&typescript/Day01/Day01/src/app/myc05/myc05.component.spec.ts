import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc05Component } from './myc05.component';

describe('Myc05Component', () => {
  let component: Myc05Component;
  let fixture: ComponentFixture<Myc05Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc05Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
