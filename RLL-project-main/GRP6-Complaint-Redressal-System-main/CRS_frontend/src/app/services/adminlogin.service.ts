import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { LoginData } from '../models/logindata';


@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
private readonly adminUser = new LoginData('Admin','123admin');
isAuthenticated=false;
  constructor(private router: Router) { }

  authenticate(login: LoginData):boolean{
    if(this.checkCredentials(login)){
      this.isAuthenticated=true;
      alert("Admin login successfully");
      this.router.navigate(['../admin']);
      return true;
    }
    alert("Incorrect Login or Password");
    this.router.navigate(['../adminlogin']);
    this.isAuthenticated = false;
    return false;
    
  }


checkCredentials(login:LoginData):boolean {
return this.checkEmail(login.username) && this.checkPassword(login.password);
}

checkEmail(email:string):boolean{
  return email=== this.adminUser.username;
}

checkPassword(password:string):boolean{
  return password=== this.adminUser.password;
}

logout(){
  this.isAuthenticated=false;
  this.router.navigate(['']);
}


}