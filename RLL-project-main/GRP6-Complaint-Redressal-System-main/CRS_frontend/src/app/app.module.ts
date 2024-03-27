import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomersComponent } from './components/customers/customers.component';
import { ManagersComponent } from './components/managers/managers.component';
import { EngineersComponent } from './components/engineers/engineers.component';
import { ComplaintsComponent } from './components/complaints/complaints.component';
import { FeedbacksComponent } from './components/feedbacks/feedbacks.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManagerregisterComponent } from './components/managerregister/managerregister.component';
import { EngineerregisterComponent } from './components/engineerregister/engineerregister.component';
import { CustomerregisterComponent } from './components/customerregister/customerregister.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


import { LogoutButtonComponent } from './logout-button/logout-button.component';

const routers: Routes = [
  { path: 'admin', component: AdminComponent },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/registerComplaints',
    component: ComplaintsComponent,
  },

  {
    path: 'feedbacks/sendFeedback',
    component: FeedbacksComponent,
  },
  {
    path: 'engineers',
    component: EngineersComponent,
  },
  {
    path: 'managers',
    component: ManagersComponent,
  },
  {
    path: 'managerregister',
    component: ManagerregisterComponent,
  },
  {
    path: 'engineerregister',
    component: EngineerregisterComponent,
  },
  {
    path: 'customerregister',
    component: CustomerregisterComponent,
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent,
  },
  {
    path:'logout-button' ,
    component:LogoutButtonComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    ManagersComponent,
    EngineersComponent,
    ComplaintsComponent,
    FeedbacksComponent,
    AdminComponent,
    ManagerregisterComponent,
    EngineerregisterComponent,
    CustomerregisterComponent,
    AdminloginComponent,
   
    
        LogoutButtonComponent,
  ],
  imports: [
    RouterModule.forRoot(routers),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
