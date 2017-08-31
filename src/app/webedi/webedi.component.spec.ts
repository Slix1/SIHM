import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebediComponent } from './webedi.component';

describe('WebediComponent', () => {
  let component: WebediComponent;
  let fixture: ComponentFixture<WebediComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebediComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebediComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
