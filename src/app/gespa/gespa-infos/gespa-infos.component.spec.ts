import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GespaInfosComponent } from './gespa-infos.component';

describe('GespaInfosComponent', () => {
  let component: GespaInfosComponent;
  let fixture: ComponentFixture<GespaInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GespaInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GespaInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
