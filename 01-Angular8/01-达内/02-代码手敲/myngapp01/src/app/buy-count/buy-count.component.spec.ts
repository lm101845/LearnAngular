import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyCountComponent } from './buy-count.component';

describe('BuyCountComponent', () => {
  let component: BuyCountComponent;
  let fixture: ComponentFixture<BuyCountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyCountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
