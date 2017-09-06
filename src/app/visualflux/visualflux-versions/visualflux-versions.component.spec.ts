import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualfluxVersionsComponent } from './visualflux-versions.component';

describe('VisualfluxVersionsComponent', () => {
  let component: VisualfluxVersionsComponent;
  let fixture: ComponentFixture<VisualfluxVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualfluxVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualfluxVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
