import { Component, OnInit } from '@angular/core';
import { Maintenance } from '../maintenance';
import { MaintenanceService } from '../maintenance.service';
import { MaintenanceTransaction } from '../maintenance-transaction';


@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.css']
})
export class MaintenanceListComponent implements OnInit {
  
  maintenance?: Maintenance[];
 
  data=[
    {"name":"anil",
    "age":25

    },
    {
      "name":"ajay",
      "age":35
    },
    {"name":"sunil",
    "age":45

    },    
    {
      "name":"vijay",
      "age":55
    }
  ];

  
  constructor(private _maintenanceService: MaintenanceService) { }

  ngOnInit(): void {
    console.log("MaintenanceListComponent ngOnInit")
    this.getMaintenanceList();
   
  }

  

  getMaintenanceList(){
    console.log("MaintenanceListComponent getMaintenanceList")
    this._maintenanceService.getAllMaintenanceList().subscribe(data=>{
      this.maintenance=data;
      console.log("maintenance List",this.maintenance)
    })
  }
}
