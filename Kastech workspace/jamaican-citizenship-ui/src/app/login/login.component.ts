import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';
import { LogoutService } from '../shared/services/logout.service';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showError:boolean=false;
  errorMsg:string ='Email/Password is incorrect ';
  login = new FormGroup({
    email:new FormControl(),
    password:new FormControl()

  });
  private loginStatus:boolean;
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
    this.loginService.authenticate(payload).subscribe(data=>{
      sessionStorage.setItem('profile',JSON.stringify(data));
      console.log("login result",data);
      if(data == null){
        this.errorMsg='Email/Password is incorrect '; 
        this.router.navigate(['/login']);
        this.showError = true;
      }
      else{
        this.logoutService.changeMessage(true);
        this.logoutService.currentMessage.subscribe(message=>{this.loginStatus = message}); 
        this.showError = false;
        this.router.navigate(['/allForms']);
      }
    })
    
  }

  forgotPassword(){
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ForgotPasswordComponent,dialogConfig);
  }

}
