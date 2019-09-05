import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllFormsComponent } from './all-forms/all-forms.component';
import { CreateProfileComponent } from './create-profile/create-profile.component';
import { HomeComponent } from './home/home.component';
import { DescentComponent } from './descent/descent.component';

// import {HttpClientModule} from '@angular/common/http';

import { LoginComponent } from './login/login.component';

import {RouterModule, ActivatedRoute} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FileDropDirective, FileSelectDirective} from "ng2-file-upload";
import {HttpClientModule} from "@angular/common/http";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { BlockUIModule } from 'ng-block-ui';



import {
  MatButtonModule, MatCardModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatProgressSpinnerModule,
  MatDialogModule, MatPaginatorModule, MatSortModule,
  MatTableModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule, MatMenuModule,
  MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatDividerModule, MatGridListModule, MatGridList,
  MatGridTile, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule,MatTooltipDefaultOptions
} from '@angular/material';

import {MatDatepickerModule} from '@angular/material/datepicker';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { AppStatusComponent } from './app-status/app-status.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { DescentSaveComponent } from './descent-save/descent-save.component';
import { AdminFormsComponent } from './admin-forms/admin-forms.component';
import { SupervisorViewComponent } from './supervisor-view/supervisor-view.component';
import { ReviewFormsComponent } from './review-forms/review-forms.component';
import { AgentComponent } from './agent/agent.component';
import { ReviewApplicantComponent } from './review-applicant/review-applicant.component';
import { ReviewDailogComponentComponent } from './review-dailog-component/review-dailog-component.component';
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
import { MarriageApplicationComponent } from './marriage-application/marriage-application.component';
import { MarriageApplicationProcessTwoComponent } from './marriage-application/marriage-application-process-two/marriage-application-process-two.component';
import { MarriageApplicationProcessThreeComponent } from './marriage-application/marriage-application-process-three/marriage-application-process-three.component';
import { MarriageApplicationProcessFourComponent } from './marriage-application/marriage-application-process-four/marriage-application-process-four.component';
import { MarriageApplicationProcessCompleteComponent } from './marriage-application/marriage-application-process-complete/marriage-application-process-complete.component';


@NgModule({
  declarations: [
    AppComponent,
    AllFormsComponent,
    CreateProfileComponent,
    HomeComponent,
    DescentComponent,
    LoginComponent,
    FileDropDirective, FileSelectDirective, ForgotPasswordComponent, ResetPasswordComponent,
     AppStatusComponent, ChangePasswordComponent, DescentSaveComponent, AdminFormsComponent,
      SupervisorViewComponent, ReviewFormsComponent, AgentComponent, ReviewApplicantComponent,
       ReviewDailogComponentComponent, SchedulerComponent, IndividualScheduleComponent,
        GroupScheduleComponent, IndividualApointmentConfirmationComponent, AlienComponent, RegistrationComponent, LocalDeskClerkComponent, LocalDeskClerkProcessComponent, NaturalisationComponent, NatrualizationProcessRequest2Component, NatrualizationProcessRequest3Component, NatrualizationProcessRequest4Component, NatrualizationProcessRequest5Component, NatrualizationProcessRequest6Component, NatrualizationSubmissionComponent, NaturalisationDocumentComponent, MarriageApplicationComponent, MarriageApplicationProcessTwoComponent, MarriageApplicationProcessThreeComponent, MarriageApplicationProcessFourComponent, MarriageApplicationProcessCompleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,BlockUIModule.forRoot(),
    FormsModule,
     MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule, MatDatepickerModule,
    MatDividerModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule,
    MatMenuModule, MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule,BsDatepickerModule.forRoot()],
  exports: [ MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatInputModule, MatProgressSpinnerModule, MatDialogModule,
    MatDatepickerModule, MatDividerModule, MatGridListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatNativeDateModule, MatIconModule, MatOptionModule, MatSelectModule,
     MatMenuModule, MatFormFieldModule, MatChipsModule, MatAutocompleteModule, MatSidenavModule, MatListModule, MatRadioModule, MatSliderModule],
   

  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ForgotPasswordComponent,DescentSaveComponent,ReviewDailogComponentComponent]
})
export class AppModule { }
