import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankBrowseComponent } from './bank-browse.component';

describe('BankBrowseComponent', () => {
  let component: BankBrowseComponent;
  let fixture: ComponentFixture<BankBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
