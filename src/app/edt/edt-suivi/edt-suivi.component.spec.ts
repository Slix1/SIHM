import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtSuiviComponent } from './edt-suivi.component';

describe('EdtSuiviComponent', () => {
  let component: EdtSuiviComponent;
  let fixture: ComponentFixture<EdtSuiviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtSuiviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtSuiviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
