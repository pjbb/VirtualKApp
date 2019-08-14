import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosAcademicosPage } from './servicios-academicos.page';

describe('ServiciosAcademicosPage', () => {
  let component: ServiciosAcademicosPage;
  let fixture: ComponentFixture<ServiciosAcademicosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosAcademicosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosAcademicosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
