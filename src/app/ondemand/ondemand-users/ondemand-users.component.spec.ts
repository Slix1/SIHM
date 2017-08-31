import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndemandUsersComponent } from './ondemand-users.component';

describe('OndemandUsersComponent', () => {
  let component: OndemandUsersComponent;
  let fixture: ComponentFixture<OndemandUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndemandUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndemandUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
