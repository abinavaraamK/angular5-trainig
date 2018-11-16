import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDonorComponent } from './request-donor.component';

describe('RequestDonorComponent', () => {
  let component: RequestDonorComponent;
  let fixture: ComponentFixture<RequestDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
