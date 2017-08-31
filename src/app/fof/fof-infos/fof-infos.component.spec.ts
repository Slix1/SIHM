import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FofinfosComponent } from './fofinfos.component';

describe('FofinfosComponent', () => {
  let component: FofinfosComponent;
  let fixture: ComponentFixture<FofinfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FofinfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FofinfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
