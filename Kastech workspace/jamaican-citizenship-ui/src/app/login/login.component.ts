import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginService } from '../shared/services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LogoutService } from '../shared/services/logout.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Profile } from '../Profile';
import { BehaviorSubject, Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showError: boolean = false;
  errorMsg: string = 'Email/Password is incorrect ';
  profile: any;
  loginLabel: string = 'Email';
  fromSchedule: string;
  private currentUserSubject: BehaviorSubject<Profile>;
  public currentUser: Observable<Profile>;

  login = new FormGroup({
    loginType: new FormControl(),
    email: new FormControl(),
    password: new FormControl()

  });
  private loginStatus: boolean;

  @BlockUI() blockUI: NgBlockUI;
  constructor(private loginService: LoginService, private router: Router,
    private logoutService: LogoutService, public dialog: MatDialog, private activateRoute: ActivatedRoute) { 

      this.currentUserSubject = new BehaviorSubject<Profile>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
      // setInterval(() => {
      //   this.showError = false;
      // }, 3000);
    }

  ngOnInit() {
    // if(localStorage.getItem('isLoggedIn'))
    // this.logoutService.setTitle('login');

    this.activateRoute.params.subscribe(param => {
      this.fromSchedule = param.schedule;
      console.log('params', param.schedule);
    })
  }

  public onCloseClick(): void {
    this.showError = false;
  }

  onSubmit(payload) {

    if (!payload.loginType) {
      this.showError = true;
      this.errorMsg = 'Please select type of login';
      return false;
    }

    if (!payload.email || !payload.password) {
      this.showError = true;
      this.errorMsg = 'Email and Password are required';
      //      this.router.navigate(['/login']);
      return false;
    }
    this.blockUI.start('Loading...');

    if (payload.loginType === 'offical') {
      if (payload.email === 'admin' && payload.password === 'admin') {
        localStorage.setItem('isLoggedIn', 'true');
        this.blockUI.stop();
        this.router.navigate(['/officalForms']);
        return false;
      } else {

        //open agent page.
        this.loginService.validateAgent(payload).subscribe(data => {
          if (data) {
            localStorage.setItem('agent', JSON.stringify(data));
            sessionStorage.setItem('profile', JSON.stringify(data));
            this.currentUserSubject.next(data)
            this.router.navigate(['/agentView']);
          } else
            return false
        })

      }
    }


    //authentication for normal user

    if (this.fromSchedule) {
      this.loginService.authenticate(payload).subscribe(data => {
        sessionStorage.setItem('profile', JSON.stringify(data));
        this.currentUserSubject.next(data)

        this.router.navigate(['/scheduleAppointment/111'])
      });
    }


    this.loginService.authenticate(payload).subscribe(data => {
      console.log("login result", data);
      if (data == null) {
        this.blockUI.stop();
        this.errorMsg = 'Email/Password is incorrect ';
        this.router.navigate(['/login']);
        this.showError = true;
      }
      else {
        localStorage.setItem('isLoggedIn', 'true');
        // this.logoutService.changeMessage(true);
        // this.logoutService.currentMessage.subscribe(message=>{this.loginStatus = message;this.blockUI.stop();}); 
        this.profile = data;
        sessionStorage.setItem('profile', JSON.stringify(data));
        this.currentUserSubject.next(data)
        this.showError = false;
        if (!this.profile.passwordChanged) {
          this.blockUI.stop();
          this.router.navigate(['/changePassword']);
          return false;
        } else if (this.profile.status && this.fromSchedule) {
          sessionStorage.setItem('appCode', this.profile.appCode);
          this.blockUI.stop();
          this.router.navigate(['/scheduleAppointment/' + this.profile.appCode + '/']);
          return false;
        } else if (this.profile.status != null) {
          sessionStorage.setItem('appCode', this.profile.appCode);
          this.blockUI.stop();
          this.router.navigate(['/status'])
          return false;
        }
        else {
          this.blockUI.stop();
          // if(this.profile.status == 'Submitted' || this.profile.status == 'submitted'){
          if (this.profile.status == null) {
            this.loginService.getDescentForm(this.profile.email).subscribe(data => {
              if (data != null)
              sessionStorage.setItem('profile', JSON.stringify(data));
              this.currentUserSubject.next(data)
                sessionStorage.setItem('descentForm', JSON.stringify(data));
              this.router.navigate(['/descentForm'])
            })
          }
        }


      }
    })

  }

  changeLabel(value) {
    if (value === 'offical') {
      this.loginLabel = 'Userid';
    } else {
      this.loginLabel = 'Email';
    }
  }
  forgotPassword(payload) {
    const dialogConfig = new MatDialogConfig();
    this.dialog.open(ForgotPasswordComponent, dialogConfig);
  }

}
