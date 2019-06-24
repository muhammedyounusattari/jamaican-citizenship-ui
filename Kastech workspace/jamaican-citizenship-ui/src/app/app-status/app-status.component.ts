import { Component, OnInit } from '@angular/core';
import { AppStatusService } from '../shared/services/app-status.service';
import { Router } from '@angular/router';
import { BlockUI, NgBlockUI } from "ng-block-ui";

@Component({
  selector: 'app-app-status',
  templateUrl: './app-status.component.html',
  styleUrls: ['./app-status.component.css']
})
export class AppStatusComponent implements OnInit {

  statusBtn:boolean;
  appStatusPage:boolean = true;
  appResultPage:boolean= false;
  profile:any;
  showErrorMsg:string;

  @BlockUI() blockUI: NgBlockUI; 
  constructor(private statusService:AppStatusService,private router:Router) { 
  
  }

  ngOnInit() {
   this.statusBtn=true;

    var appCode = sessionStorage.getItem('appCode');
    if(appCode != null){
      sessionStorage.removeItem('appCode');
      this.getApplicationStatus(appCode);
    }
    

  }
  
  validate(appCode){
    this.statusBtn = true;
    if(appCode && appCode.length>4){
      this.statusBtn = false;
      return true;;
    }
  }

  getApplicationStatus(appCode){
    this.blockUI.start('Loading...');
    if(appCode && appCode.length>5){
      this.statusService.checkAppCodeStatus(appCode).subscribe(data=>{
        
        if(data !=null){

        this.appStatusPage = false;
        this.appResultPage = true;
        this.profile = data;
        this.showErrorMsg="";
        if(this.profile.status == 'submitted' || this.profile.status == 'Submitted'){
          this.profile.status = 'assets/images/submitted.png';
        }else if(this.profile.status == 'in_progress'){
          this.profile.status = 'assets/images/processing.png';
        }
        console.log(data);
        }else{
          this.showErrorMsg = 'Invalid Application Number';
        }   
        this.blockUI.stop();     
      })
      // alert(appCode);
    }
    else{
      this.blockUI.stop();
      this.statusBtn = true;
      return false;
    }
  }

}