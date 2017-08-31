import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocinjecteursComponent } from './docinjecteurs.component';

describe('DocinjecteursComponent', () => {
  let component: DocinjecteursComponent;
  let fixture: ComponentFixture<DocinjecteursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocinjecteursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocinjecteursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
