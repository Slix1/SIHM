import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesmagInfosComponent } from './gesmag-infos.component';

describe('GesmagInfosComponent', () => {
  let component: GesmagInfosComponent;
  let fixture: ComponentFixture<GesmagInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesmagInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesmagInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
