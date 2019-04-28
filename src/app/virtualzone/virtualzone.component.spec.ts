import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualzoneComponent } from './virtualzone.component';

describe('VirtualzoneComponent', () => {
  let component: VirtualzoneComponent;
  let fixture: ComponentFixture<VirtualzoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualzoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
