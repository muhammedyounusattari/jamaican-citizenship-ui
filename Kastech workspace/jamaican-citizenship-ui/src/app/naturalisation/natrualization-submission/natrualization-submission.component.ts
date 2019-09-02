import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NaturlizationService } from 'src/app/shared/services/naturlization.service';

@Component({
  selector: 'app-natrualization-submission',
  templateUrl: './natrualization-submission.component.html',
  styleUrls: ['./natrualization-submission.component.css']
})
export class NatrualizationSubmissionComponent implements OnInit {

  applicantId:string;

  constructor(private naturalizationService:NaturlizationService,private activatedRoute:ActivatedRoute) {
    this.activatedRoute.params.subscribe((data)=>{
      this.applicantId = data.type;
    });
    
  }

  ngOnInit() {
    debugger;
    var processStroage = localStorage.getItem('process1');
    var process6 = processStroage!=null?JSON.parse(processStroage):null;
//    ((!=null)?JSON.parse(localStorage.getItem('process1'):null));

  /*  this.naturalizationService.submitNaturalisationForm(process6).subscribe((data:any)=>{
      console.log('.....',data);
      if(data==null){
        alert('Your have already submitted your application for Naturalization')
      }else{
        this.applicantId =data.profile.appCode; 

      }
    })     */
  }

}
