import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDetectionComponent } from './weather-detection.component';

describe('WeatherDetectionComponent', () => {
  let component: WeatherDetectionComponent;
  let fixture: ComponentFixture<WeatherDetectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherDetectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDetectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
