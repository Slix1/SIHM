import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndemandInfosComponent } from './ondemand-infos.component';

describe('OndemandInfosComponent', () => {
  let component: OndemandInfosComponent;
  let fixture: ComponentFixture<OndemandInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndemandInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndemandInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
