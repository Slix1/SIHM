import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentumComponent } from './documentum.component';

describe('DocumentumComponent', () => {
  let component: DocumentumComponent;
  let fixture: ComponentFixture<DocumentumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
