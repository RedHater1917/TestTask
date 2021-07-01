import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditOfferEditComponent } from './credit-offer-edit.component';

describe('CreditOfferEditComponent', () => {
  let component: CreditOfferEditComponent;
  let fixture: ComponentFixture<CreditOfferEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditOfferEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditOfferEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
