import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Donation2Component } from './donation2.component';

describe('Donation2Component', () => {
  let component: Donation2Component;
  let fixture: ComponentFixture<Donation2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Donation2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Donation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
