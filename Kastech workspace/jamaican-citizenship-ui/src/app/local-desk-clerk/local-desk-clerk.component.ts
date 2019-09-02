import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../shared/services/admin.service';
import { AgentService } from 'src/shared/services/agent.service';

@Component({
  selector: 'app-local-desk-clerk',
  templateUrl: './local-desk-clerk.component.html',
  styleUrls: ['./local-desk-clerk.component.css']
})
export class LocalDeskClerkComponent implements OnInit {

  menuOption:string ='';
  menuValue:string='';
  selected:string;
  agent:any;
  
  menuDropValue = [
    
    {name:'Review Applications',value:"ra"}
//    {name:'View Appointment Schedule',value:"vas"}
  ];


  type:string;
  formType:string;
  applicants:any;
  constructor(private router:Router,private adminService:AdminService,private activatedRoute:ActivatedRoute,
    private agentService:AgentService) {
    this.activatedRoute.params.subscribe((param)=>{
      this.type = param.type;
      this.formType = param.formType;
    })
   }

  ngOnInit() {
  }

  changeMenu(event){

    if(this.selected=="vas"){
      this.router.navigate(['/localDeskClerkProcess']);
    }
    if(this.selected==="ra"){
     var data  = localStorage.getItem('agent');
     this.applicants = (data!=null)?JSON.parse(data):data;      
    }
  
  }

  getReviewForm(applicantId){
    if(!applicantId)
      return false;
   
    this.agentService.getReviewForm(applicantId,this.formType).subscribe(data=>{
      this.agent = data;
      if(data){
        if(this.formType=="dpa"){
          localStorage.setItem('profile',JSON.stringify(this.agent[0].profile));
          localStorage.setItem('descentForm', JSON.stringify(this.agent[0]));
          this.router.navigate(['/reviewApplicantForm/'+this.type+'/'])
        }
        if(this.formType=="nacw"){
         
            localStorage.setItem('isReviewOnly','true');
            localStorage.setItem('process1',JSON.stringify(this.agent[0]));
            localStorage.setItem('process',JSON.stringify(this.agent[0]));
            localStorage.setItem('roles',JSON.stringify(this.agent[0].profile));
            this.router.navigate(['/naturalisation',this.type]);
        
        }

        
      }
     
    })  
   
  }
}
