import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginData } from '../models/logindata';
import { AuthenticationService } from '../services/adminlogin.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  loginform: any;

  
  constructor(private authenticationService : AuthenticationService) { }
  submitted=false;

  ngOnInit(): void {
  }
  onSubmit(loginForm :NgForm)
  {
    this.submitted=true;
   const Logindata = new LoginData(loginForm.value.inputUserName,loginForm.value.password);
   this.authenticationService.authenticate(Logindata);
   this.loginform.reset()
  }
  
}
