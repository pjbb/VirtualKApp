import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTeacherPage } from './home-teacher.page';

describe('HomeTeacherPage', () => {
  let component: HomeTeacherPage;
  let fixture: ComponentFixture<HomeTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTeacherPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
