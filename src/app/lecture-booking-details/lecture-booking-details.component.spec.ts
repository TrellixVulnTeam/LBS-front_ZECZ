import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureBookingDetailsComponent } from './lecture-booking-details.component';

describe('LectureBookingDetailsComponent', () => {
  let component: LectureBookingDetailsComponent;
  let fixture: ComponentFixture<LectureBookingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureBookingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureBookingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
