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
        GroupScheduleComponent, IndividualApointmentConfirmationComponent, AlienComponent, RegistrationComponent 
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
