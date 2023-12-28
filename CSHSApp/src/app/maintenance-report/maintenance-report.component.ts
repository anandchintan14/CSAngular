import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

import { FormGroup } from '@angular/forms';
import { MaintenanceService } from '../maintenance.service';
import { Maintenance } from '../maintenance';
import { Router } from '@angular/router';
import { MaintenanceTransaction } from '../maintenance-transaction';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-maintenance-report',
  templateUrl: './maintenance-report.component.html',
  styleUrls: ['./maintenance-report.component.css']
})
export class MaintenanceReportComponent implements OnInit {

  maintenanceReport: Maintenance[];

  maintenance:Maintenance=new Maintenance();
 maintenanceTransaction: MaintenanceTransaction =new MaintenanceTransaction();
 div1:boolean=false;
 div2:boolean=false;
 div3:boolean=false;
 div4:boolean=false;
maintenanceAmount: any;

 div1Function(){
  this.div1=true;

 // this.maintenancePaymentForm.controls['yearlyPayment'].reset();
  this.maintenancePaymentForm.controls['halfYearlyPayment'].reset();
  this.maintenancePaymentForm.controls['quartelyPayment'].reset();
  this.maintenancePaymentForm.controls['monthlyPayment'].reset();
  this.div2=false;

  this.div3=false
  this.div4=false;
}

div2Function(){
  this.div2=true;
  this.maintenancePaymentForm.controls['yearlyPayment'].reset();
 // this.maintenancePaymentForm.controls['halfYearlyPayment'].reset();
  this.maintenancePaymentForm.controls['quartelyPayment'].reset();
  this.maintenancePaymentForm.controls['monthlyPayment'].reset();

  this.div1=false;
  this.div3=false
  this.div4=false;
}

div3Function(){
  this.maintenancePaymentForm.controls['yearlyPayment'].reset();
  this.maintenancePaymentForm.controls['halfYearlyPayment'].reset();
 // this.maintenancePaymentForm.controls['quartelyPayment'].reset();
  this.maintenancePaymentForm.controls['monthlyPayment'].reset();

  this.div3=true;
  this.div2=false;
  this.div1=false
  this.div4=false;
}

div4Function(){
  this.maintenancePaymentForm.controls['yearlyPayment'].reset();
  this.maintenancePaymentForm.controls['halfYearlyPayment'].reset();
  this.maintenancePaymentForm.controls['quartelyPayment'].reset();
 // this.maintenancePaymentForm.controls['monthlyPayment'].reset();

  this.div4=true;
  this.div2=false;
  this.div1=false
  this.div3=false
}
 
  maintenancePaymentForm = this._formBuilder.group(
  {
    financialYear: ['',Validators.required],
    wing: [],
    flatNo:[],
    residentType: [],
    yearlyPayment: [],
    halfYearlyPayment: [],
    quartelyPayment: [],
    monthlyPayment:[],
    maintenanceAmount: [],
    transactionNumber:[]
  }
  
)

  constructor(private _formBuilder:FormBuilder, private maintenanceService:MaintenanceService,
    private _router:Router) {}
  

    searchMaintenanceTransaction(){
      console.log(this.maintenanceTransaction);
     
      this.maintenanceService.searchMaintenancePaymentTransaction(this.maintenanceTransaction)
      .subscribe(data =>{
        console.log(data)
      // this.maintenanceTransaction=data;
      this.maintenanceReport=data;
      console.log("maintenance List",this.maintenanceReport)

        
     },
      error=>console.log(error)
     

   );
   //this.getMaintenanceTransactionList();
  
    }

    
    


    

   saveMaintenance(){
    //console.log("maintenance data :", this.maintenance.flatNo);
 
    console.log(this.maintenance);
    console.log(this.maintenanceTransaction);
    
     

   this.maintenanceService.saveUserPayment(this.maintenance).subscribe(data =>{console.log(data)},
   error=>console.log(error)

   );
    
    this.gotoMaintenanceList();
    }
  

    ngOnInit(): void {
     // this.flatNo.setValue("10");
     //this.maintenancePaymentForm.patchValue({flatNo:'10'})
     console.log(this.maintenancePaymentForm.value)
    }

    getMaintenanceList(){
      console.log("MaintenanceListComponent getMaintenanceList")
      this.maintenanceService.getAllMaintenanceList().subscribe(data=>{
       // this.maintenanceTransactione=data;
        console.log("maintenance List",this.maintenance)
      })
    }
  
    gotoMaintenanceList(){
    this._router.navigate(['/maintenance-list']);

   

    }

    getMaintenanceTransactionList(){
      this._router.navigate(['maintenance-transactionList']);
    }

}
