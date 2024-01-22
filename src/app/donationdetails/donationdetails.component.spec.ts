import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationdetailsComponent } from './donationdetails.component';

describe('DonationdetailsComponent', () => {
  let component: DonationdetailsComponent;
  let fixture: ComponentFixture<DonationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DonationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
