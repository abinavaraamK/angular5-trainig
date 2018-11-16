import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastCampsComponent } from './past-camps.component';

describe('PastCampsComponent', () => {
  let component: PastCampsComponent;
  let fixture: ComponentFixture<PastCampsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastCampsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastCampsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
