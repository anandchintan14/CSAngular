import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {MatDialogModule} from '@angular/material/dialog'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatTableModule} from '@angular/material/table';
import { MaintenancePaymentComponent } from './maintenance-payment/maintenance-payment.component';
import { MaintenanceReportComponent } from './maintenance-report/maintenance-report.component';
import { MaintenanceListComponent } from './maintenance-list/maintenance-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaintenanceTransactionComponent } from './maintenance-transaction/maintenance-transaction.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { MaintenanceReceiptComponent } from './maintenance-receipt/maintenance-receipt.component';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    MaintenancePaymentComponent,
    MaintenanceReportComponent,
    MaintenanceListComponent,
    MaintenanceTransactionComponent,
    MaintenanceReceiptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatTableModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatExpansionModule,
    
        
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
