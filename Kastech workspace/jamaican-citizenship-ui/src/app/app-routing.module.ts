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
import { SchedulerComponent } from './scheduler/scheduler.component';
import { IndividualScheduleComponent } from './individual-schedule/individual-schedule.component';
import { GroupScheduleComponent } from './group-schedule/group-schedule.component';
import { IndividualApointmentConfirmationComponent } from './individual-apointment-confirmation/individual-apointment-confirmation.component';
import { AlienComponent } from './alien/alien.component';
import { RegistrationComponent } from './registration/registration.component';
import { LocalDeskClerkComponent } from './local-desk-clerk/local-desk-clerk.component';
import { LocalDeskClerkProcessComponent } from './local-desk-clerk-process/local-desk-clerk-process.component';
import { NaturalisationComponent } from './naturalisation/naturalisation.component';
import { NatrualizationProcessRequest2Component } from './naturalisation/natrualization-process-request2/natrualization-process-request2.component';
import { NatrualizationProcessRequest3Component } from './naturalisation/natrualization-process-request3/natrualization-process-request3.component';
import { NatrualizationProcessRequest4Component } from './naturalisation/natrualization-process-request4/natrualization-process-request4.component';
import { NatrualizationProcessRequest5Component } from './naturalisation/natrualization-process-request5/natrualization-process-request5.component';
import { NatrualizationProcessRequest6Component } from './naturalisation/natrualization-process-request6/natrualization-process-request6.component';
import { NatrualizationSubmissionComponent } from './naturalisation/natrualization-submission/natrualization-submission.component';
import { NaturalisationDocumentComponent } from './naturalisation/naturalisation-document/naturalisation-document.component';
// import { NaturalizationDocumentsUploadComponent } from './naturalisation/naturalization-documents-upload/naturalization-documents-upload.component';
import { MarriageApplicationComponent } from './marriage-application/marriage-application.component';
import { MarriageApplicationProcessTwoComponent } from './marriage-application/marriage-application-process-two/marriage-application-process-two.component';
import { MarriageApplicationProcessThreeComponent } from './marriage-application/marriage-application-process-three/marriage-application-process-three.component';
import { MarriageApplicationProcessFourComponent } from './marriage-application/marriage-application-process-four/marriage-application-process-four.component';
import { MarriageApplicationProcessCompleteComponent } from './marriage-application/marriage-application-process-complete/marriage-application-process-complete.component';

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
  {path:'officalForms/:type/:id', component:AdminFormsComponent},
  {path:'officalForms/:type', component:AdminFormsComponent},
  {path:'reviewForms/:formType', component:ReviewFormsComponent},
  {path:'reviewForms/:formType/:type', component:ReviewFormsComponent},
  {path:'agentView/:type', component:AgentComponent},
  {path:'agentView/:type/:formType', component:AgentComponent},
  {path:'reviewApplicantForm/:type', component:ReviewApplicantComponent},
  {path:'reviewApplicantForm/:type/:formType', component:ReviewApplicantComponent},
  {path:'scheduleAppointment/:applicantId',component:SchedulerComponent},
  {path:'login/:schedule',component:LoginComponent},
  {path:'individualSchedule/:applicantId', component:IndividualScheduleComponent},
  {path:'groupSchedule', component:GroupScheduleComponent},
  {path:'individualAppointmentConf', component:IndividualApointmentConfirmationComponent},
  {path:'naturalisationForm', component:AlienComponent},
  {path:'registrationApplicationForm', component:RegistrationComponent},
  {path:'localDeskClerk/:formType/:type',component:LocalDeskClerkComponent},
  {path:'localDeskClerkProcess',component:LocalDeskClerkProcessComponent},

  //path for naturalisation with formType
  {path:'naturalisation',component:NaturalisationComponent},
  {path:'naturalisation-process2',component:NatrualizationProcessRequest2Component},
  {path:'naturalisation-process3',component:NatrualizationProcessRequest3Component},
  {path:'naturalisation-process4',component:NatrualizationProcessRequest4Component},
  {path:'naturalisation-process5',component:NatrualizationProcessRequest5Component},
  {path:'naturalisation-process6',component:NatrualizationProcessRequest6Component},
  {path:'naturalisation-submission',component:NatrualizationSubmissionComponent},
  {path:'naturalisation-document-upload',component:NaturalisationDocumentComponent},
  
  {path:'naturalisation/:type',component:NaturalisationComponent},
  {path:'naturalisation-process2/:type',component:NatrualizationProcessRequest2Component},
  {path:'naturalisation-process3/:type',component:NatrualizationProcessRequest3Component},
  {path:'naturalisation-process4/:type',component:NatrualizationProcessRequest4Component},
  {path:'naturalisation-process5/:type',component:NatrualizationProcessRequest5Component},
  {path:'naturalisation-process6/:type',component:NatrualizationProcessRequest6Component},
  {path:'naturalisation-submission/:type',component:NatrualizationSubmissionComponent},
  {path:'naturalisation-document-upload/:type',component:NaturalisationDocumentComponent},

  //path for Marriage Application with formType
 {path:'marriageApplication',component:MarriageApplicationComponent},
 {path:'marriageApplication-process2',component:MarriageApplicationProcessTwoComponent},
 {path:'marriageApplication-process3',component:MarriageApplicationProcessThreeComponent},
 {path:'marriageApplication-process4',component:MarriageApplicationProcessFourComponent},
 {path:'marriageApplication-complete',component:MarriageApplicationProcessCompleteComponent}, 
/*
  {path:'naturalisation/:type/:formType',component:NaturalisationComponent},
  {path:'naturalisation-process2/:type/:formType',component:NatrualizationProcessRequest2Component},
  {path:'naturalisation-process3/:type/:formType',component:NatrualizationProcessRequest3Component},
  {path:'naturalisation-process4/:type/:formType',component:NatrualizationProcessRequest4Component},
  {path:'naturalisation-process5/:type/:formType',component:NatrualizationProcessRequest5Component},
  {path:'naturalisation-process6/:type/:formType',component:NatrualizationProcessRequest6Component},
  {path:'naturalisation-submission/:type/:formType',component:NatrualizationSubmissionComponent},
 {path:'naturalisation-document-upload/:type/:formType',component:NaturalisationDocumentComponent} */
];

 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
