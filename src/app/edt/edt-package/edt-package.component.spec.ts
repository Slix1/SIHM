import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtPackageComponent } from './edt-package.component';

describe('EdtPackageComponent', () => {
  let component: EdtPackageComponent;
  let fixture: ComponentFixture<EdtPackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtPackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
