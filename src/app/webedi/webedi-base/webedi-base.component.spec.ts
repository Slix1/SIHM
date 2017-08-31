import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebediBaseComponent } from './webedi-base.component';

describe('WebediBaseComponent', () => {
  let component: WebediBaseComponent;
  let fixture: ComponentFixture<WebediBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebediBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebediBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
