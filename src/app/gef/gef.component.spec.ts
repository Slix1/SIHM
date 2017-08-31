import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GefComponent } from './gef.component';

describe('GefComponent', () => {
  let component: GefComponent;
  let fixture: ComponentFixture<GefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
