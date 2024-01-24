import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGirlComponent } from './form-girl.component';

describe('FormGirlComponent', () => {
  let component: FormGirlComponent;
  let fixture: ComponentFixture<FormGirlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormGirlComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormGirlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
