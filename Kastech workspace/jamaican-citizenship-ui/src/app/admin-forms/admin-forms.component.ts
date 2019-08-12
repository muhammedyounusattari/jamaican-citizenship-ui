import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../shared/services/logout.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../shared/services/admin.service';

@Component({
  selector: 'app-admin-forms',
  templateUrl: './admin-forms.component.html',
  styleUrls: ['./admin-forms.component.css']
})
export class AdminFormsComponent implements OnInit {

  private currentUserSubject: BehaviorSubject<String>;
  private currentUser: Observable<String>;
  private loginType:string;
  private id:string;

  constructor(private logoutService:LogoutService,private activatedRoute:ActivatedRoute,
    private adminService:AdminService,private router:Router) {
    this.currentUserSubject = new BehaviorSubject<String>(JSON.parse(localStorage.getItem('isLoggedIn')));
    this.currentUser = this.currentUserSubject.asObservable();

    this.activatedRoute.params.subscribe((param)=>{
      this.loginType = param.type;
      this.id = param.id;
    })

   }

  ngOnInit() {
    if(localStorage.getItem('isLoggedIn'))
      this.logoutService.setTitle('All Forms');
  }

  formSelected(formType){
    debugger;
    if(!formType){
      console.error('formType is not defined/missing..',formType);
      return false;
    }

    // if(formType==='dpa'){
      if(this.loginType==="agentView"){
       this.adminService.getAgentApplicantList(this.id,formType).subscribe((data:any)=>{
        if(data == null){
          alert('there are not application assinged to you ');
        }
        else{
          localStorage.setItem('agent',JSON.stringify(data));
          this.router.navigate(['/agentView']);
        }

       });
      }
      else if(this.loginType==="deskClerk"){
       this.adminService.getDeskClerkApplicantList(this.id,formType).subscribe((data:any)=>{
        if(data == null){
          alert('there are not application assinged to you ');
        }else{
          localStorage.setItem('agent',JSON.stringify(data));
          this.router.navigate(['/agentView']);
        }
       });
      }else{
        this.router.navigate(['/reviewForms/'+formType+'/'+this.loginType])
      }

    // }
  }

}
