import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndemandVersionsComponent } from './ondemand-versions.component';

describe('OndemandVersionsComponent', () => {
  let component: OndemandVersionsComponent;
  let fixture: ComponentFixture<OndemandVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndemandVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndemandVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
