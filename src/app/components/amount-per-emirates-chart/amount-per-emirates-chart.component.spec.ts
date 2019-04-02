import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmountPerEmiratesChartComponent } from './amount-per-emirates-chart.component';

describe('AmountPerEmiratesChartComponent', () => {
  let component: AmountPerEmiratesChartComponent;
  let fixture: ComponentFixture<AmountPerEmiratesChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmountPerEmiratesChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmountPerEmiratesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
