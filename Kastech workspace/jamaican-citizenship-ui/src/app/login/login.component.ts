import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { LogoutService } from '../shared/services/logout.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showError:boolean=false;
  errorMsg:string ='Email/Password is incorrect ';
  profile:any;
  login = new FormGroup({
    email:new FormControl(),
    password:new FormControl()

  });
  private loginStatus:boolean;

  @BlockUI() blockUI: NgBlockUI;
  constructor(private loginService:LoginService,private router:Router, 
    private logoutService:LogoutService,public dialog: MatDialog) { }

  ngOnInit() {
    
  }

  onSubmit(payload){
    
    if(payload.email == null || payload.password==null){
      this.showError = true;
      this.errorMsg='email and password are required';
      this.router.navigate(['/login']);
      return false;
    }
    this.blockUI.start('loading...');
    this.loginService.authenticate(payload).subscribe(data=>{
      console.log("login result",data);
      if(data == null){
        this.blockUI.stop();
        this.errorMsg='Email/Password is incorrect '; 
        this.router.navigate(['/login']);
        this.showError = true;
      }
      else{
        // this.logoutService.changeMessage(true);
        // this.logoutService.currentMessage.subscribe(message=>{this.loginStatus = message;this.blockUI.stop();}); 
        this.profile = data;
        sessionStorage.setItem('profile',JSON.stringify(data));
        this.showError = false;
        if(this.profile.status !=null){
          sessionStorage.setItem('appCode',this.profile.appCode);
          this.blockUI.stop();
          this.router.navigate(['/status'])
          return false;
        }else{
          this.blockUI.stop();
          // if(this.profile.status == 'Submitted' || this.profile.status == 'submitted'){
          if(this.profile.status == null){
            this.loginService.getDescentForm(this.profile.email).subscribe(data=>{            
             if(data !=null )
              sessionStorage.setItem('descentForm',JSON.stringify(data));
            this.router.navigate(['/descentForm'])
          })
        }
        }
       
       
      }
    })
    
  }

  forgotPassword(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ForgotPasswordComponent,dialogConfig);
  }

}
