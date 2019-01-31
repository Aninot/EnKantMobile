import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PannierPage } from './pannier.page';

describe('PannierPage', () => {
  let component: PannierPage;
  let fixture: ComponentFixture<PannierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PannierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PannierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
