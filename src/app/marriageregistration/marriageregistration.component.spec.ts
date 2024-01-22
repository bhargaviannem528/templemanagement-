import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageregistrationComponent } from './marriageregistration.component';

describe('MarriageregistrationComponent', () => {
  let component: MarriageregistrationComponent;
  let fixture: ComponentFixture<MarriageregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriageregistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarriageregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
