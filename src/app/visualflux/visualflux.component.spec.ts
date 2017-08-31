import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualfluxComponent } from './visualflux.component';

describe('VisualfluxComponent', () => {
  let component: VisualfluxComponent;
  let fixture: ComponentFixture<VisualfluxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualfluxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualfluxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
