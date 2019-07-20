import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFormsComponent } from './all-forms/all-forms.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DescentComponent } from './descent/descent.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AppStatusComponent } from './app-status/app-status.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AdminFormsComponent } from './admin-forms/admin-forms.component';
import { SupervisorViewComponent } from './supervisor-view/supervisor-view.component';
import { ReviewFormsComponent } from './review-forms/review-forms.component';
import { AgentComponent } from './agent/agent.component';
import { ReviewApplicantComponent } from './review-applicant/review-applicant.component';


const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'createProfile',component:CreateProfileComponent},
  {path:'allForms',component:AllFormsComponent},
  {path:'descentForm',component:DescentComponent},
  {path:'login',component:LoginComponent},
  {path:'resetPassword/:emailId',component:ResetPasswordComponent},
  {path:'status',component:AppStatusComponent},
  {path:'statusResults',component:AppStatusComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'officalForms', component:AdminFormsComponent},
  // {path:'adminReview/:formType',component:SupervisorViewComponent},
  // {path:'reviewForms', component:ReviewFormsComponent},
  //{path:'adminReview/:formType',component:SupervisorViewComponent},
  {path:'reviewForms/:formType', component:ReviewFormsComponent},

  {path:'agentView', component:AgentComponent},
  {path:'reviewApplicantForm', component:ReviewApplicantComponent}
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
