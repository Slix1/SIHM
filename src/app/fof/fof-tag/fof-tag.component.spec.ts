import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FofTagComponent } from './fof-tag.component';

describe('FofTagComponent', () => {
  let component: FofTagComponent;
  let fixture: ComponentFixture<FofTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FofTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FofTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
