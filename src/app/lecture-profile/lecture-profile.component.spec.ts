import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LectureProfileComponent } from './lecture-profile.component';

describe('LectureProfileComponent', () => {
  let component: LectureProfileComponent;
  let fixture: ComponentFixture<LectureProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LectureProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LectureProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
