import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FxTradingListComponent } from './fx-trading-list.component';

describe('FxTradingListComponent', () => {
  let component: FxTradingListComponent;
  let fixture: ComponentFixture<FxTradingListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FxTradingListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FxTradingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
