import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AddnewmemberComponent } from './librarian/addnewmember/addnewmember.component';
import { CheckbookavailabiltyComponent } from './librarian/checkbookavailabilty/checkbookavailabilty.component';
import { TakepaymentComponent } from './librarian/takepayment/takepayment.component';
import { PaymenthistoryComponent } from './librarian/paymenthistory/paymenthistory.component';
import { HomeComponent } from './home/home.component';
import { AddnewcopyComponent } from './librarian/addnewcopy/addnewcopy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './common/signup/signup.component';
import { AddnewbookComponent } from './librarian/addnewbook/addnewbook.component';
import { EditprofileComponent } from './common/editprofile/editprofile.component';
import { ChangepasswordComponent } from './common/changepassword/changepassword.component';
import { DashboardownerComponent } from './owner/dashboardowner/dashboardowner.component';
import { SubjectwisecopiesreportComponent } from './owner/subjectwisecopiesreport/subjectwisecopiesreport.component';
import { BookwisecopiesreportComponent } from './owner/bookwisecopiesreport/bookwisecopiesreport.component';
import { FeesfinereportComponent } from './owner/feesfinereport/feesfinereport.component';
import { HelpComponent } from './owner/help/help.component';
import { DashboarduserComponent } from './user/dashboarduser/dashboarduser.component';
import { IssuedbooksComponent } from './user/issuedbooks/issuedbooks.component';
import { PaymenthistorysComponent } from './user/paymenthistorys/paymenthistorys.component';
import { ReturnbookComponent } from './librarian/returnbook/returnbook.component';
import { IssuebookComponent } from './librarian/issuebook/issuebook.component';
import { ListofissuedbooksComponent } from './librarian/listofissuedbooks/listofissuedbooks.component';
import { ListofallusersComponent } from './librarian/listofallusers/listofallusers.component';
import { LibrariandashboardComponent } from './librarian/librariandashboard/librariandashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    AddnewmemberComponent,
    CheckbookavailabiltyComponent,
    TakepaymentComponent,
    PaymenthistoryComponent,
    HomeComponent,
    DashboardComponent,
    AddnewcopyComponent,
    SignupComponent,
    AddnewbookComponent,
    EditprofileComponent,
    ChangepasswordComponent,
    DashboardownerComponent,
    SubjectwisecopiesreportComponent,
    BookwisecopiesreportComponent,
    FeesfinereportComponent,
    HelpComponent,
    DashboarduserComponent,
    IssuedbooksComponent,
    PaymenthistorysComponent,
    ReturnbookComponent,
    IssuebookComponent,
    ListofissuedbooksComponent,
    ListofallusersComponent,
    LibrariandashboardComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:"",component :DashboardComponent}, 
      {path:'signup',component:SignupComponent},
      {path :'dashboard',component:DashboardComponent },
      {path :'editprofile',component : EditprofileComponent} , 
      {path : 'changepassword',component:ChangepasswordComponent}, 
{path: 'addnewmember',component:AddnewmemberComponent},
{path: 'checkbookavailabilty',component:CheckbookavailabiltyComponent},
{path : 'addnewcopy',component: AddnewcopyComponent},
{path : 'addnewbook',component:AddnewbookComponent},
{path : 'takepayment',component:TakepaymentComponent},
{path :'paymenthistory',component:PaymenthistoryComponent},
{path : 'dashboardowner',component:DashboardownerComponent},
{path : 'subjectwisecopiesreport' , component: SubjectwisecopiesreportComponent},
{path : 'bookwisecopiesreport' ,component:BookwisecopiesreportComponent},
{path : 'feesfinereport',component : FeesfinereportComponent},
{path: 'help' , component:HelpComponent},
{path : 'dashboarduser',component:DashboarduserComponent},
{path : 'issuedbooks',component:IssuedbooksComponent },
{path : 'paymenthistorys', component:PaymenthistorysComponent},
{path: 'returnbook', component: ReturnbookComponent},
{path: 'issuebook', component: IssuebookComponent},
{path: 'listofissuedbooks', component:ListofissuedbooksComponent},
{path: 'listofallusers', component: ListofallusersComponent},
{path: 'librariandashboard', component: LibrariandashboardComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
