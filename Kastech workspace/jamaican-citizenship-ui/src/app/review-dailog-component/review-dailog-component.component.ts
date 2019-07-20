import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MatDialogRef } from '@angular/material';
import { AgentService } from 'src/shared/services/agent.service';
import { Router } from '@angular/router';

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
  constructor(private agent: AgentService, private dialogRef: MatDialogRef<ReviewDailogComponentComponent>, private router: Router) {
    dialogRef.disableClose = true;
  }

  ngOnInit() {
  }



  save(comments) {
    var payload = { applicantId: '', status: '', agentId: '', comments: '' };
    payload.applicantId = localStorage.getItem('applicantId');
    payload.status = localStorage.getItem('status');
    payload.agentId = JSON.parse(localStorage.getItem('agent'))._id;
    payload.comments = comments;


    this.agent.updateApplicantStatus(payload).subscribe(data => {

      if (data != null) {
        localStorage.setItem('agent', JSON.stringify(data));
        localStorage.removeItem('status');
        localStorage.removeItem('applicantId');
        this.router.navigate(['/agentView']);
        return false;
      }
      this.router.navigate(['/reviewApplicantForm']);
    })
  }

  close() {
    this.dialogRef.close();
  }

}
