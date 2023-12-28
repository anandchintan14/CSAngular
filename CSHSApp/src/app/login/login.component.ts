import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 // constructor(private _router:Router,private _MatDialog:MatDialog) { 

  //}

  constructor(private _router: Router) { 

   }
  ngOnInit(): void {
    
  }
  

  loginAction(){
    this._router.navigate(['dashboard'])
  }

  
}
