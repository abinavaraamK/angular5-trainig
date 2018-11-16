import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualDonorComponent } from './individual-donor.component';

describe('IndividualDonorComponent', () => {
  let component: IndividualDonorComponent;
  let fixture: ComponentFixture<IndividualDonorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualDonorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualDonorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
