import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MatDialogRef } from '@angular/material';
import { AgentService } from 'src/shared/services/agent.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-dailog-component',
  templateUrl: './review-dailog-component.component.html',
  styleUrls: ['./review-dailog-component.component.css']
})
export class ReviewDailogComponentComponent implements OnInit {

  errorMessage: string;
  successMessage: string;
  sentMail: boolean;
  

  @BlockUI() blockUI: NgBlockUI;
  constructor(private agent: AgentService, private dialogRef: MatDialogRef<ReviewDailogComponentComponent>, 
    private router: Router) {
    this.blockUI.stop();
    dialogRef.disableClose = true;
   
  }

  ngOnInit() {
  }



  save(comments) {
	  debugger;
    var payload = { applicantId: '', status: '', agentId: '', comments: '',type:'', formType:'' };
    payload.applicantId = localStorage.getItem('applicantId');
    payload.status = localStorage.getItem('status');
    

    var data = localStorage.getItem('agent');
    if(data != null)
    var info = JSON.parse(data);

    if(info.data){
      payload.agentId = info.data[0].id;
      payload.formType = info.data[0].profile.applied;      
    }else{

      payload.agentId = info._id;
      payload.formType = info.formType;
    }
    payload.type = localStorage.getItem('type');
    payload.comments = comments;
    this.blockUI.start("loading......");

    if(!payload.formType){
      payload.formType = localStorage.getItem('formType');
    }


   this.agent.updateApplicantStatus(payload).subscribe(data => {
    this.blockUI.stop();
      if (data != null) {
        localStorage.setItem('agent', JSON.stringify(data));
        localStorage.removeItem('status');
        localStorage.removeItem('applicantId');
        localStorage.removeItem('type');
        this.router.navigate(['/agentView']);
        this.dialogRef.close();
        // this.router.navigate(['/agentView/'+payload.type]);
 //       return false;
      }
      this.dialogRef.close();

      if(payload.type==="localdeskclerk")
        this.router.navigate(['/localDeskClerk/'+payload.formType+'/'+payload.type]);
      else  if(payload.type==="agentView" )
      this.router.navigate(['/agentView/'+payload.formType+'/'+payload.type]);   
      else if(payload.type==="director" || payload.type==="ceo" || payload.type==="permanentsecretary" || payload.type==="operationsmanager" )
      this.router.navigate(['/agentView/'+payload.type+'/'+payload.formType])
      else
      this.router.navigate(['/agentView/'+payload.type]);
    }) 
   }

  close() {
    this.dialogRef.close();
  }

}
