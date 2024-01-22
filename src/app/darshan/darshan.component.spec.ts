import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarshanComponent } from './darshan.component';

describe('DarshanComponent', () => {
  let component: DarshanComponent;
  let fixture: ComponentFixture<DarshanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarshanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarshanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
