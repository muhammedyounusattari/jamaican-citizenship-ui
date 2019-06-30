import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-descent-save',
  templateUrl: './descent-save.component.html',
  styleUrls: ['./descent-save.component.css']
})
export class DescentSaveComponent implements OnInit {

  errorMessage:string;
  successMessage:string;
  sentMail:boolean;

  @BlockUI() blockUI: NgBlockUI;
  constructor(public dialogRef: MatDialogRef<DescentSaveComponent>) { 
    dialogRef.disableClose=true;
  }

  ngOnInit() {
  }

  validateEmail(email){
    
  }

  close() {
    this.dialogRef.close();
  }
}
