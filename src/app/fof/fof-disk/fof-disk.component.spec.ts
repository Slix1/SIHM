import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FofdiskComponent } from './fofdisk.component';

describe('FofdiskComponent', () => {
  let component: FofdiskComponent;
  let fixture: ComponentFixture<FofdiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FofdiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FofdiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
