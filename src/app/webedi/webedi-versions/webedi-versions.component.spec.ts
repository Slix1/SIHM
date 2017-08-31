import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebediVersionsComponent } from './webedi-versions.component';

describe('WebediVersionsComponent', () => {
  let component: WebediVersionsComponent;
  let fixture: ComponentFixture<WebediVersionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebediVersionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebediVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
