import { Component } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrls: ['./logout-button.component.css']
})
export class LogoutButtonComponent {
  constructor() { }

  logout(): void {
    // Implement your logout logic here
    console.log('Logout clicked');
  }
}
