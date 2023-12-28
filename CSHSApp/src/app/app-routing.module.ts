import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaintenancePaymentComponent } from './maintenance-payment/maintenance-payment.component';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report.component';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { MaintenanceTransactionComponent } from './maintenance-transaction/maintenance-transaction.component';
import { MaintenanceReceiptComponent } from './maintenance-receipt/maintenance-receipt.component';



const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'maintenance-payment', component: MaintenancePaymentComponent },
  { path: 'maintenance-report', component: MaintenanceReportComponent },
  { path: 'maintenance-list', component: MaintenanceListComponent },
  { path: 'maintenance-transactionList', component: MaintenanceTransactionComponent},
  { path: 'maintenance-generate-Report', component: MaintenanceReceiptComponent},

  

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
