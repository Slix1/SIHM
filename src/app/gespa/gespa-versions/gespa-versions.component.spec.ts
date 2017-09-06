import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GespaVersionsComponent } from './gespa-versions.component';

describe('GespaVersionsComponent', () => {
  let component: GespaVersionsComponent;
  let fixture: ComponentFixture<GespaVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GespaVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GespaVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
