import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriagedetailsComponent } from './marriagedetails.component';

describe('MarriagedetailsComponent', () => {
  let component: MarriagedetailsComponent;
  let fixture: ComponentFixture<MarriagedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriagedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriagedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
