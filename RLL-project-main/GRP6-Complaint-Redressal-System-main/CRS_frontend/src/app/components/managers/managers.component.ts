import { EngineersService } from './../../services/engineers.service';
import { Feedbacks } from './../../models/feedbacks';
import { FeedbacksService } from './../../services/feedbacks.service';
import { Complaints } from './../../models/complaints';

import { ManagersService } from './../../services/managers.service';
import { Managers } from './../../models/managers';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.css'],
})
export class ManagersComponent implements OnInit {
  manager: Managers = new Managers();
  managerLoggedIn: string;
  login:boolean=true;
  assignEngineersButton: boolean = true;
  assignEngineersDropdown: boolean = false;
  managerloginStatus: boolean = false;
  viewComplaints: boolean = false;
  viewFeedbacks: boolean = false;
  managerPincode: string;
  complaints: Complaints[] = [];
  feedbacks: Feedbacks[] = [];
managerEmail:string;

  engineerEmails: string[] = [];
  selectedEngineer: string;


  constructor(
    private _managersService: ManagersService,
   
    private _formBuilder: FormBuilder,
    private _feedbacksService: FeedbacksService,
    private _engineersService: EngineersService,

  ) {}

  loginForm = this._formBuilder.group({
    managerEmail: '',
    managerPassword: '',
    engineerEmail: '',
  });

  ngOnInit(): void {
    
  }

  

  validateManager(): any {
    
    this._managersService
      .validateManager(this.loginForm.value)
      .subscribe((data) => {
        if (data != null) {
          this.managerLoggedIn = this.loginForm.value['managerEmail'];
          
          this.managerloginStatus = true;
          this.login=false;
          this.managerPincode = data.managerPincode;
          alert("manager login success")
          console.log('Manager Exists : reached safely !', this.managerPincode);
          
          
        } else {
          alert("Invalid credentials")
          console.log('Manager does not exists !');
        }
      });
  }

  getAllComplaintsByPincode() {
   
    console.log('Inside manager.components.ts --- ', this.managerPincode);

    this.viewComplaints = true;
   
    this._managersService
      .getAllComplaintsByPincode(this.managerPincode)
      .subscribe((data) => {
        console.log('data = complaints fetched based on pincode', data);

        this.complaints = data;
      });
  }
  getAllFeedbacks() {
    this.viewFeedbacks = true;
    this._feedbacksService.getAllFeedbacks().subscribe((data) => {
      console.log('data = feedbacks fetched based on email', data);
      this.feedbacks = data;
    });
  }
  assignEngineers() {
   
    this.assignEngineersButton = false;
    this.assignEngineersDropdown = true;
    this._engineersService.getAllEngineerMails().subscribe((data) => {
      console.log('data = all Engineer Emails', data);
      this.engineerEmails = data;
    });
  }
  engineersDuty(complaint: Complaints) {
    this._managersService
      .statusUpdate(
        complaint.ticketId,
        complaint.customerEmail,
        this.selectedEngineer
      )
      .subscribe((data) => {
        if (data) {
          alert('Engineer Assigned');
        } else {
          alert('complaint already assigned');
        }
      });
  }
  engineerSelected(event: any) {
  
    
    this.selectedEngineer = event.target.value;
  }
}