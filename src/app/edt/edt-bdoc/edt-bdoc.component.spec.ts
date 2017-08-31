import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtbdocComponent } from './edtbdoc.component';

describe('EdtbdocComponent', () => {
  let component: EdtbdocComponent;
  let fixture: ComponentFixture<EdtbdocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtbdocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtbdocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
