import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GespaComponent } from './gespa.component';

describe('GespaComponent', () => {
  let component: GespaComponent;
  let fixture: ComponentFixture<GespaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GespaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GespaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
