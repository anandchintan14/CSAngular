import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import { Maintenance } from './maintenance';
import { MaintenanceTransaction } from './maintenance-transaction';


@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {
  private baseUrl="http://localhost:9090/maintenance/newMaintenancePayment";
  private getUrl="http://localhost:9090/maintenance/getAllMaintenance";
  private maintTransactionUrl="http://localhost:9090/maintenance/newMaintenancePaymentTransaction";

  private getMaintenanceTransactionUrl="http://localhost:9090/maintenance/getAllMaintenanceTransaction";
  private getAllMaintenanceWingFlatNoUrl="http://localhost:9090/maintenance/getAllMaintenanceWingFlatNo";
  private getAllMaintenanceSummaryReport="http://localhost:9090/maintenance/getAllMaintenanceSummary";

  constructor(
    private _http:HttpClient
    ) { }


  public saveUserPayment(maintenance:Maintenance):Observable<any>{
   // public saveUserPayment(maintenance:MaintenanceForm):Observable<Object>{
    return this._http.post<Maintenance>(`${this.baseUrl}`,maintenance);

  }


  public getUserMaintenancePaymentSummaryForFlatNo(wing: string , flatNo: string  ):Observable<Maintenance>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append("wing",wing);
    queryParams=queryParams.append("flatNo",flatNo);
    
     return this._http.get<Maintenance>(`${this.getAllMaintenanceWingFlatNoUrl}`,{params:queryParams});
 
   }

  public saveMaintenancePaymentTransaction(maintenanceTransaction:MaintenanceTransaction):Observable<any>{
    // public saveUserPayment(maintenance:MaintenanceForm):Observable<Object>{
     return this._http.post<Maintenance>(`${this.maintTransactionUrl}`,maintenanceTransaction);
 
   }


   public searchMaintenancePaymentTransaction(maintenanceTransaction:MaintenanceTransaction):Observable<Maintenance[]>{
    let queryParams = new HttpParams();
  

    var halfYearlyPayment=maintenanceTransaction.halfYearlyPayment;
    var yearlyPayment=maintenanceTransaction.yearlyPayment;
    var monthlyPayment=maintenanceTransaction.monthlyPayment
    var paymentFromMonthToMonth="";
    if(yearlyPayment != null || yearlyPayment != undefined){
       paymentFromMonthToMonth=yearlyPayment;
       console.log(" yearlyPayment paymentFromMonthToMonth",paymentFromMonthToMonth);
    }else if(halfYearlyPayment != null || halfYearlyPayment != undefined){
      paymentFromMonthToMonth=halfYearlyPayment
      console.log(" halfYearlyPayment paymentFromMonthToMonth",paymentFromMonthToMonth);
    }
   else  if(monthlyPayment != null || monthlyPayment != undefined){
    paymentFromMonthToMonth=monthlyPayment;
    console.log(" monthlyPayment paymentFromMonthToMonth",paymentFromMonthToMonth);
    }

    console.log("paymentFromMonthToMonth",paymentFromMonthToMonth);



    
    queryParams = queryParams.append("wing",maintenanceTransaction.wing);
    queryParams=queryParams.append("flatNo",maintenanceTransaction.flatNo);
    
    queryParams = queryParams.append("paymentFromMonthToMonth",paymentFromMonthToMonth);
    

    // public saveUserPayment(maintenance:MaintenanceForm):Observable<Object>{
     return this._http.get<Maintenance[]>(`${this.getAllMaintenanceSummaryReport}`,{params:queryParams});
 
   }



  getAllMaintenanceList():Observable<Maintenance[]>{
    console.log("getAllMaintenanceList list ",this.getUrl)
    return this._http.get<Maintenance[]>(`${this.getUrl}`);

  }

  getAllMaintenanceTransactionList():Observable<MaintenanceTransaction[]>{
    console.log("getAllMaintenanceTransactionList service method")
    return this._http.get<MaintenanceTransaction[]>(`${this.getMaintenanceTransactionUrl}`);
  }

  
}
