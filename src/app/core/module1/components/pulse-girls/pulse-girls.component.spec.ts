import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PulseGirlsComponent } from './pulse-girls.component';

describe('PulseGirlsComponent', () => {
  let component: PulseGirlsComponent;
  let fixture: ComponentFixture<PulseGirlsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PulseGirlsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PulseGirlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
