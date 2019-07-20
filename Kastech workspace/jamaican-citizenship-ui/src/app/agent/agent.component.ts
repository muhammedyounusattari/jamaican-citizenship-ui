import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/shared/services/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  agent:any;

  constructor(private agentService:AgentService,private router:Router) { 
    var data = localStorage.getItem('agent');
    if(data){
      this.agent = JSON.parse(data);
    }
  }
  
  ngOnInit() {
  }

  getReviewForm(applicantId){
    if(!applicantId)
      return false;
   
    this.agentService.getReviewForm(applicantId).subscribe(data=>{
      this.agent = data;
      if(data){
        localStorage.setItem('profile',JSON.stringify(this.agent.profile));
        localStorage.setItem('descentForm', JSON.stringify(data));
      }
      this.router.navigate(['/reviewApplicantForm'])
    })  
   
  }

}
