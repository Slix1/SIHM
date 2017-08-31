import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualfluxUsersComponent } from './visualflux-users.component';

describe('VisualfluxUsersComponent', () => {
  let component: VisualfluxUsersComponent;
  let fixture: ComponentFixture<VisualfluxUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualfluxUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualfluxUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
