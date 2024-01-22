import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshandetailsComponent } from './darshandetails.component';

describe('DarshandetailsComponent', () => {
  let component: DarshandetailsComponent;
  let fixture: ComponentFixture<DarshandetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshandetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshandetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
