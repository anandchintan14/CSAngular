import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceTransactionComponent } from './maintenance-transaction.component';

describe('MaintenanceTransactionComponent', () => {
  let component: MaintenanceTransactionComponent;
  let fixture: ComponentFixture<MaintenanceTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceTransactionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
