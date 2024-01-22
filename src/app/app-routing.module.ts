import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AbouttempleComponent } from './festival/abouttemple/abouttemple.component';
import { Donation2Component } from './donation2/donation2.component';


import { TempleprofileComponent } from './templeprofile/templeprofile.component';
import { WorshipgodComponent } from './worshipgod/worshipgod.component';
import { IncometypeComponent } from './incometype/incometype.component';
import { ExpensetypeComponent } from './expensetype/expensetype.component';
import { EmployeedetailsComponent } from './employeedetails/employeedetails.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { FestivalComponent } from './festival/festival.component';

import { PoojaComponent } from './pooja/pooja.component';
import { PoojadetailsComponent } from './poojadetails/poojadetails.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent,  } from './contactus/contactus.component';

import { UsersignupComponent } from './usersignup/usersignup.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LOCATION_INITIALIZED } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { Home2Component } from './home2/home2.component';

import { Nav2Component } from './nav2/nav2.component';
import { Home3Component } from './home3/home3.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';
import { DonateComponent } from './donate/donate.component';
import { SevaComponent } from './seva/seva.component';
import { Nav3Component } from './nav3/nav3.component';
import { DonationdetailsComponent } from './donationdetails/donationdetails.component';
import { SevadetailsComponent } from './sevadetails/sevadetails.component';
import { DarshanComponent } from './darshan/darshan.component';
import { DarshandetailsComponent } from './darshandetails/darshandetails.component';
import { MarriageregistrationComponent } from './marriageregistration/marriageregistration.component';
import { MarriagedetailsComponent } from './marriagedetails/marriagedetails.component';






const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
 

  {path:'login',component:LoginComponent},
  {path:'adminlogin',component:AdminloginComponent},
  {path:'templeprofile',component:TempleprofileComponent},
  {path:'worshipgod',component:WorshipgodComponent},
  {path:'incometype',component:IncometypeComponent},
  {path:'expensetype',component:ExpensetypeComponent},
  {path:'employeedetails',component:EmployeedetailsComponent},
  {path:'userdetails',component:UserdetailsComponent},
  {path:'festival',component:FestivalComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'donate',component:DonateComponent},
  {path:'abouttemple',component:AbouttempleComponent},
  {path:'donation2',component:Donation2Component},
  {path:'nav3',component:Nav3Component},
  {path:'poojadetails',component:PoojadetailsComponent},
  {path:'donationdetails',component:DonationdetailsComponent},
  {path:'sevadetails',component:SevadetailsComponent},
  {path:'darshan',component:DarshanComponent},
  {path:'darshandetails',component:DarshandetailsComponent},
  {path:'marriageregistration',component:MarriageregistrationComponent},
  {path:'marriagedetails',component:MarriagedetailsComponent},
 

  
  
 
 
  {path:'home',component:HomeComponent},
 
  {path:'usersignup',component:UsersignupComponent},
  {path:'pooja',component:PoojaComponent},
  {path:'nav',component:NavComponent},
  {path:'home2',component:Home2Component},
  {path:'nav2',component:Nav2Component},
  {path:'home3',component:Home3Component,
children:[
  {path:"nav2",component:Nav2Component}
]},
  {path:'income',component:IncomeComponent},
  {path:'expense',component:ExpenseComponent},
  {path:'seva',component:SevaComponent},
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
