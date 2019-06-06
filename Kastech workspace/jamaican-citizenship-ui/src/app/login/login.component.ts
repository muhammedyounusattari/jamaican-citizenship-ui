import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators ,FormControl} from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

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

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(payload){
    debugger;
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
        this.showError = false;
        this.router.navigate(['/allForms']);
      }
    })
    
  }

}
