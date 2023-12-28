import { Component, OnInit } from '@angular/core';
//import { MaintenancePaymentComponent } from './maintenance-payment/maintenance-payment.component';
//import { MaintenanceReportComponent } from './maintenance-report/maintenance-report.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router:Router  ) {

   }
  userManagement(){

  }

  maintenancePayment(){
    console.log("clicked maintenance payment");
    this._router.navigate(['maintenance-payment'])


  }

  maintenanceReport(){
    console.log("clicked maintenance Report");
    this._router.navigate(['maintenance-report'])

   }

   maintenanceList(){
    console.log("clicked maintenance details");
    this._router.navigate(['maintenance-list'])
   }

   GenerateMaintReceipt(){

    console.log("clicked generate  maintenance");
    this._router.navigate(['maintenance-generate-Report'])

   }



  ngOnInit(): void {
  }

}
