import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadercontrolComponent } from './headercontrol.component';

describe('HeadercontrolComponent', () => {
  let component: HeadercontrolComponent;
  let fixture: ComponentFixture<HeadercontrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadercontrolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadercontrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
