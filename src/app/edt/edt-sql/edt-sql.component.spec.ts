import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdtSqlComponent } from './edt-sql.component';

describe('EdtSqlComponent', () => {
  let component: EdtSqlComponent;
  let fixture: ComponentFixture<EdtSqlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdtSqlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdtSqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
