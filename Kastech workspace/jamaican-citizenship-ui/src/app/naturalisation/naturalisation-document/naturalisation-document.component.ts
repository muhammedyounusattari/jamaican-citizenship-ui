import { Component, OnInit } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ReviewDailogComponentComponent } from 'src/app/review-dailog-component/review-dailog-component.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-naturalisation-document',
  templateUrl: './naturalisation-document.component.html',
  styleUrls: ['./naturalisation-document.component.css']
})
export class NaturalisationDocumentComponent implements OnInit {

  naturalizationFormSessoin:any;
  loginType:string;   
  formType:string;    
  status:string;
  constructor(private activatedRoute:ActivatedRoute,public dialog:MatDialog) {
    
    this.activatedRoute.params.subscribe(params=>{
      this.loginType = params.type;
      this.formType = params.formType;
    })
    
    var process1 = localStorage.getItem('process');
    if (process1 != null) {
      this.naturalizationFormSessoin = JSON.parse(process1);
    }

    this.formType = JSON.parse(localStorage.getItem('roles')).applied
   

  }

  ngOnInit() {
  }

  updateStatus(value){
    const dialogConfig = new MatDialogConfig();
    localStorage.setItem('status',value);
    localStorage.setItem('type',this.loginType);
    localStorage.setItem('formType',this.formType);
    localStorage.setItem('applicantId',""+this.naturalizationFormSessoin.id);
    this.dialog.open(ReviewDailogComponentComponent, dialogConfig);
  }

 incomplete(){
    const dialogConfig = new MatDialogConfig();
//    localStorage.setItem('status','incomplete');

    if(this.loginType==="agentView"){
      this.status = "cs";
    }

    if(this.loginType==="operationsmanager"){
      this.status = "cs";
    }

    if(this.loginType==="director"){
      this.status ="om";
    }

    if(this.loginType==="ceo"){
      this.status ="director";
    }

    if(this.loginType==="permanentsecretary"){
      this.status = "ceo";
    }

    localStorage.setItem('status',this.status);
    localStorage.setItem('type',this.loginType);
    localStorage.setItem('formType',this.formType);
    localStorage.setItem('applicantId',""+this.naturalizationFormSessoin.id);
    this.dialog.open(ReviewDailogComponentComponent, dialogConfig); 
  }

  refer(value){
    const dialogConfig = new MatDialogConfig();
    // localStorage.setItem('status','reffered');
    localStorage.setItem('status',value);
    localStorage.setItem('type',this.loginType);
    localStorage.setItem('formType',this.formType);
    localStorage.setItem('applicantId',""+this.naturalizationFormSessoin.id);
    this.dialog.open(ReviewDailogComponentComponent, dialogConfig);
  }
/*
  nextClick(value){
    const dialogConfig = new MatDialogConfig();
    // localStorage.setItem('status','complete');
    localStorage.setItem('status',value);
    localStorage.setItem('type',this.loginType);
    localStorage.setItem('applicantId',""+this.descentFormSessoin.id);
    this.dialog.open(ReviewDailogComponentComponent, dialogConfig);
  } */

//  this.router.navigate(['/naturalisation-submission'])
}