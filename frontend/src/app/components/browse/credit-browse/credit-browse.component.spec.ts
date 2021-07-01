import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditBrowseComponent } from './credit-browse.component';

describe('CreditBrowseComponent', () => {
  let component: CreditBrowseComponent;
  let fixture: ComponentFixture<CreditBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
