import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceReceiptComponent } from './maintenance-receipt.component';

describe('MaintenanceReceiptComponent', () => {
  let component: MaintenanceReceiptComponent;
  let fixture: ComponentFixture<MaintenanceReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceReceiptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
