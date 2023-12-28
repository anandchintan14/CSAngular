import { Component, OnInit } from '@angular/core';
import jsPDF  from 'jspdf';
import autoTable from 'jspdf-autotable';


@Component({
  selector: 'app-maintenance-receipt',
  templateUrl: './maintenance-receipt.component.html',
  styleUrls: ['./maintenance-receipt.component.css']
})
export class MaintenanceReceiptComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  generatePdfReport(){
   
   var doc = new jsPDF();

   doc.setFontSize(20);
  
    autoTable(doc,{html:"#maintenanceReport"});
    doc.save("testpdf");

  }

}
