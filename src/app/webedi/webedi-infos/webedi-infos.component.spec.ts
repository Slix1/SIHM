import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebediInfosComponent } from './webedi-infos.component';

describe('WebediInfosComponent', () => {
  let component: WebediInfosComponent;
  let fixture: ComponentFixture<WebediInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebediInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebediInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
