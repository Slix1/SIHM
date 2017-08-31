import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesmagUsersComponent } from './gesmag-users.component';

describe('GesmagUsersComponent', () => {
  let component: GesmagUsersComponent;
  let fixture: ComponentFixture<GesmagUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesmagUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesmagUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
