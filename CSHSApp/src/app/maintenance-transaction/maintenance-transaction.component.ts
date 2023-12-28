import { Component, OnInit } from '@angular/core';
import { MaintenanceTransaction } from '../maintenance-transaction';
import { MaintenanceService } from '../maintenance.service';
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-maintenance-transaction',
  templateUrl: './maintenance-transaction.component.html',
  styleUrls: ['./maintenance-transaction.component.css']
})
export class MaintenanceTransactionComponent implements OnInit {
  
  maintenanceTransactionList?:MaintenanceTransaction[];

 constructor(private _maintenanceService: MaintenanceService) { }

  ngOnInit(): void {

    this.getMaintenanceTransactionList();
    
  }

  getMaintenanceTransactionList(){
    console.log("MaintenanceListComponent getMaintenanceTransactionList")
    this._maintenanceService.getAllMaintenanceTransactionList().subscribe(data=>{
      this.maintenanceTransactionList=data;
      console.log("maintenance List",this.maintenanceTransactionList)
    })

  }

  generatePdfReport(){
   
    var doc = new jsPDF();
  
    autoTable(doc,{html:"#maintenanceReport"});
    doc.save("testpdf");

  }
}
