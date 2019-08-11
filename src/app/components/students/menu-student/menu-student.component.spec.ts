import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuStudentComponent } from './menu-student.component';

describe('MenuStudentComponent', () => {
  let component: MenuStudentComponent;
  let fixture: ComponentFixture<MenuStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuStudentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
