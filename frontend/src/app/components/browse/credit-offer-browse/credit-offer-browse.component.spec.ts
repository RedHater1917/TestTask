import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditOfferBrowseComponent } from './credit-offer-browse.component';

describe('CreditOfferBrowseComponent', () => {
  let component: CreditOfferBrowseComponent;
  let fixture: ComponentFixture<CreditOfferBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditOfferBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditOfferBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
