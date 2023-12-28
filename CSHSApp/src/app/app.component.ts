import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CSHSApp';
  constructor(private _dialog: MatDialog){}
  registerUser(){
    this._dialog.open(RegisterComponent)
  }
  login(){
    this._dialog.open(LoginComponent)
  }
}
