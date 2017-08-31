import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtdiskComponent } from './edtdisk.component';

describe('EdtdiskComponent', () => {
  let component: EdtdiskComponent;
  let fixture: ComponentFixture<EdtdiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtdiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtdiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
