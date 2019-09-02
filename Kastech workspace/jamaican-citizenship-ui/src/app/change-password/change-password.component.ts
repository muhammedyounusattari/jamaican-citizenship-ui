import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { LoginService } from '../shared/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  constructor(private loginService: LoginService, private router: Router) { }
  userForm: FormGroup;
  cloneProfile: any = sessionStorage.getItem('profile');
  profile: any;
  showMessage: string;

  ngOnInit() {

    if (this.cloneProfile) {
      this.profile = JSON.parse(this.cloneProfile);
    }

    this.loadForm();
  }

  loadForm() {
    this.userForm = new FormGroup({
      email: new FormControl({ value: this.profile.email, disabled: true }, [Validators.required, Validators.maxLength(10)]),
      password: new FormControl(this.profile.password, [Validators.required, Validators.maxLength(10)]),
      newpassword: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      confpassword: new FormControl('', [Validators.required, Validators.maxLength(10)])
    });
  }

  submit(payload) {

    var newpass = payload.newpassword;
    var confPass = payload.confpassword;
    

    this.blockUI.start('loading....');
    if (newpass && confPass && newpass.match(confPass)) {
      payload.email = this.profile.email;
      payload.password = newpass;
      this.loginService.resetPassword(payload).subscribe(data => {
        this.blockUI.stop();
        this.profile = data;
        if (this.profile.status != null) {
          sessionStorage.setItem('appCode', this.profile.appCode);
          this.blockUI.stop();
         // this.router.navigate(['/status'])
         this.router.navigate(['/home']);
         return false;
        }
        else {
          this.blockUI.stop();
          // if(this.profile.status == 'Submitted' || this.profile.status == 'submitted'){
          if (this.profile.status == null) {
            this.loginService.getDescentForm(this.profile.email).subscribe(data => {
              if (data != null)
                sessionStorage.setItem('descentForm', JSON.stringify(data));
              this.router.navigate(['/allForms'])
            })
          }
        }

      })
    } else {
      this.blockUI.stop();
      this.showMessage = 'New password and Confirm password is not same ';
    }
  }

  resetForm(){
    this.showMessage="";
    this.loadForm();
  }

}
