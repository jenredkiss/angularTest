import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLessonsComponent } from './basic-lessons.component';

describe('BasicLessonsComponent', () => {
  let component: BasicLessonsComponent;
  let fixture: ComponentFixture<BasicLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
