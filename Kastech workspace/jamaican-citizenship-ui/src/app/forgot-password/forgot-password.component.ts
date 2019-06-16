import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
import { MatDialogRef } from "@angular/material";
import { NgBlockUI, BlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  errorMessage:string;
  successMessage:string;
  sentMail:boolean;

  @BlockUI() blockUI: NgBlockUI;
  constructor(private loginService:LoginService,public dialogRef: MatDialogRef<ForgotPasswordComponent>) { 
    dialogRef.disableClose=true;
  }

  ngOnInit() {
  }

  validateEmail(email){
    
    if(!email){
      this.errorMessage='Email is required field';
      return false;
    }
    if(!email.match('@')){
      this.errorMessage='Invalid Email Address';
      return false;
    }
    this.blockUI.start('loading...');  
    this.loginService.validateEmail(email).subscribe(data=>{
      if(data == null){
       this.errorMessage = "Email id doesn't exist, please create your profile";   
       this.sentMail = false; 
      }
      else{
        this.errorMessage = "";
        this.successMessage = "Reset password link sent to your email ";
        this.sentMail = true;
      }
    this.blockUI.stop();
    })
  }

  close() {
    this.dialogRef.close();
  }
}
