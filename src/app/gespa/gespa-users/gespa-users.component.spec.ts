import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GespaUsersComponent } from './gespa-users.component';

describe('GespaUsersComponent', () => {
  let component: GespaUsersComponent;
  let fixture: ComponentFixture<GespaUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GespaUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GespaUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
