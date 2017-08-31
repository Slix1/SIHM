import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtinfosComponent } from './edtinfos.component';

describe('EdtinfosComponent', () => {
  let component: EdtinfosComponent;
  let fixture: ComponentFixture<EdtinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
