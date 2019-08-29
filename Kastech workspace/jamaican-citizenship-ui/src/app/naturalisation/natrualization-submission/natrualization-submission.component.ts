import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-natrualization-submission',
  templateUrl: './natrualization-submission.component.html',
  styleUrls: ['./natrualization-submission.component.css']
})
export class NatrualizationSubmissionComponent implements OnInit {

  applicantId:string;

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe((param)=>{
      this.applicantId = param.applicantId;
    })
  }

  ngOnInit() {
  }

}
