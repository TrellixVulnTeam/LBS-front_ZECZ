import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureLabBookingsComponent } from './lecture-lab-bookings.component';

describe('LectureLabBookingsComponent', () => {
  let component: LectureLabBookingsComponent;
  let fixture: ComponentFixture<LectureLabBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureLabBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureLabBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
