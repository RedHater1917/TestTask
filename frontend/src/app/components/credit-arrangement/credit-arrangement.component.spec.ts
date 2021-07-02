import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditArrangementComponent } from './credit-arrangement.component';

describe('CreditArrangementComponent', () => {
  let component: CreditArrangementComponent;
  let fixture: ComponentFixture<CreditArrangementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditArrangementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditArrangementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
