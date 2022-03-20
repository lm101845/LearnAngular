import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc06Component } from './myc06.component';

describe('Myc06Component', () => {
  let component: Myc06Component;
  let fixture: ComponentFixture<Myc06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Myc06Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
