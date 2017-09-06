import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesmagVersionsComponent } from './gesmag-versions.component';

describe('GesmagVersionsComponent', () => {
  let component: GesmagVersionsComponent;
  let fixture: ComponentFixture<GesmagVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesmagVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesmagVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
