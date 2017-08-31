import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebediUsersComponent } from './webedi-users.component';

describe('WebediUsersComponent', () => {
  let component: WebediUsersComponent;
  let fixture: ComponentFixture<WebediUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebediUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebediUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
