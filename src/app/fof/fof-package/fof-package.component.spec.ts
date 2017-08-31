import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FofpackageComponent } from './fofpackage.component';

describe('FofpackageComponent', () => {
  let component: FofpackageComponent;
  let fixture: ComponentFixture<FofpackageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FofpackageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FofpackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
