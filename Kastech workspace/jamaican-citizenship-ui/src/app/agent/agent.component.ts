import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/shared/services/agent.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent implements OnInit {

  agent:any;
  roles:any;
  type:string;
  formType:string;
  constructor(private agentService:AgentService,private router:Router,private activateRoute:ActivatedRoute) { 
    var data = localStorage.getItem('agent');
    var info = localStorage.getItem('roles');
    this.roles = (info!=null)?JSON.parse(info):info;

    this.activateRoute.params.subscribe((params)=>{
      this.type = params.type;
      this.formType = params.formType;
    });

    if(data){
      this.agent = JSON.parse(data);
      console.log(data);
    }
   
      // if(this.roles.type==="agent"){

      // }
      // if(this.roles.type==="deskClerk"){

      // }
    
  }
  
  ngOnInit() {
  }

  allForms(){
    this.router.navigate(['/officalForms/'+this.type]);
  }

  getReviewForm(applicantId){
    if(!applicantId)
      return false;
   
    var tempType = this.type;  
    var tempFormType = this.formType;

    if(this.type=="operationsmanager" || tempType=="director" || tempType === "ceo" || tempType === "permanentsecretary")
      this.type = this.formType;

    this.agentService.getReviewForm(applicantId,this.type).subscribe(data=>{
      this.agent = data;
      
      if(tempType=="operationsmanager" || tempType=="director" || tempType === "ceo" || tempType === "permanentsecretary"){
        this.type = tempFormType;
        this.formType = tempType;
      }

      if(data){
        
        if(!this.formType)
          this.formType = this.type;

        if(this.type==='dpa'){
          localStorage.setItem('profile',JSON.stringify(this.agent[0].profile));
          localStorage.setItem('descentForm', JSON.stringify(data[0]));
          if(tempType=="operationsmanager"|| tempType=="director" || tempType === "ceo" || tempType === "permanentsecretary" ){
            this.router.navigate(['/reviewApplicantForm/'+this.formType+'/'+this.type+'/'])
          }else{
            this.router.navigate(['/reviewApplicantForm/'+this.formType])
          }
        }
        if(this.type === 'nacw'){
          localStorage.setItem('isReviewOnly','true');
          localStorage.setItem('process1',JSON.stringify(this.agent[0]));
          localStorage.setItem('process',JSON.stringify(this.agent[0]));
          localStorage.setItem('roles',JSON.stringify(this.agent[0].profile));
          if(tempType=="operationsmanager" || tempType=="director" || tempType === "ceo" || tempType === "permanentsecretary" ){
            this.router.navigate(['/naturalisation/'+this.formType+'/']);
          }else{
            this.router.navigate(['/naturalisation/'+this.formType+'/'])
          }

          
        }
      }
      
    })  
   
  }

}
