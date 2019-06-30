import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { BlockUI, NgBlockUI } from "ng-block-ui";
import { loadLContextFromNode } from '@angular/core/src/render3/discovery_utils';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  email:string='email';
  resetEmail:string;

  userForm:FormGroup;
  showMessage:string;
  
  @BlockUI() blockUI: NgBlockUI;
  constructor(private activateRoute:ActivatedRoute,private loginService:LoginService, private formBuilder:FormBuilder,private router:Router) {
   }
  
  ngOnInit() {
     //this.loadForm();

     this.activateRoute.params.subscribe(param=>{
      this.email = param.emailId;
      this.loadForm();
      console.log('params',param.email);
    })

    
    
    //console.log(this.email);
  }

  resetForm(){
    this.loadForm();
    // this.userForm = new FormGroup({
    //   email:new FormControl({value: this.email, disabled: true}, [Validators.required, Validators.maxLength(10)]),
    //   password:new FormControl('',[Validators.required,Validators.maxLength(10)]),
    //   confpassword:new FormControl('',[Validators.required,Validators.maxLength(10)]) 
    // });
  }

  resetPassword(payload){
    payload.email = this.email;
    var pass = payload.password;
    var confPass = payload.confpassword;
    
    if( pass && confPass && pass.match(confPass)){
      this.blockUI.start('loading....');
      this.loginService.resetPassword(payload).subscribe(data=>{
        this.blockUI.stop();
        this.router.navigate(['/home']);
        
      })
    }else{
      this.blockUI.stop();
      this.showMessage ='New password and Confirm password is not same ';  
      }           
  }

  loadForm(){
    this.userForm = new FormGroup({
      email:new FormControl({value: this.email, disabled: true}, [Validators.required, Validators.maxLength(10)]),
      password:new FormControl('',[Validators.required,Validators.maxLength(10)]),
      confpassword:new FormControl('',[Validators.required,Validators.maxLength(10)]) 
    });
  }

}
