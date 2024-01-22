import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SevadetailsComponent } from './sevadetails.component';

describe('SevadetailsComponent', () => {
  let component: SevadetailsComponent;
  let fixture: ComponentFixture<SevadetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SevadetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SevadetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
