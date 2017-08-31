import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualfluxInfosComponent } from './visualflux-infos.component';

describe('VisualfluxInfosComponent', () => {
  let component: VisualfluxInfosComponent;
  let fixture: ComponentFixture<VisualfluxInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualfluxInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualfluxInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
