import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GesmagComponent } from './gesmag.component';

describe('GesmagComponent', () => {
  let component: GesmagComponent;
  let fixture: ComponentFixture<GesmagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GesmagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GesmagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
