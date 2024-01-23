import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInfluencerComponent } from './form-influencer.component';

describe('FormInfluencerComponent', () => {
  let component: FormInfluencerComponent;
  let fixture: ComponentFixture<FormInfluencerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInfluencerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormInfluencerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
