import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocinfosComponent } from './docinfos.component';

describe('DocinfosComponent', () => {
  let component: DocinfosComponent;
  let fixture: ComponentFixture<DocinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
