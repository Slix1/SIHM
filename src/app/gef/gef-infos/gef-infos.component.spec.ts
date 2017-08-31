import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GefInfosComponent } from './gef-infos.component';

describe('GefInfosComponent', () => {
  let component: GefInfosComponent;
  let fixture: ComponentFixture<GefInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GefInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GefInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
