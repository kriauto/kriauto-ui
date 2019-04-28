import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LastpositionComponent } from './lastposition.component';

describe('LastpositionComponent', () => {
  let component: LastpositionComponent;
  let fixture: ComponentFixture<LastpositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LastpositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LastpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
