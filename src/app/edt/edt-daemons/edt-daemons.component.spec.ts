import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtDaemonsComponent } from './edt-daemons.component';

describe('EdtDaemonsComponent', () => {
  let component: EdtDaemonsComponent;
  let fixture: ComponentFixture<EdtDaemonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtDaemonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtDaemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
