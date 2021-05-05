import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewOnboardeeComponent } from './view-onboardee.component';

describe('ViewOnboardeeComponent', () => {
  let component: ViewOnboardeeComponent;
  let fixture: ComponentFixture<ViewOnboardeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewOnboardeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewOnboardeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
