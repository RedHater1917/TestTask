import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Credit } from 'src/app/entities/credit';
import { CreditService } from 'src/app/services/creditService';

@Component({
  selector: 'app-credit-edit',
  templateUrl: './credit-edit.component.html',
  styleUrls: ['./credit-edit.component.css']
})
export class CreditEditComponent{

  creditForm: FormGroup;
  constructor(
    public fb: FormBuilder, private service:CreditService,
    public dialogRef: MatDialogRef<CreditEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Credit){
      this.creditForm = this.fb.group({
        creditPercent: [""],
        creditLimit:[""]
      });
      if(this.data!=null){
        this.creditForm.setValue({creditPercent:data.creditPercent, creditLimit: data.creditLimit})
      }
    }
    
  onSubmit() {
    if(this.data == null){
      this.data = new Credit();
    }
    this.data.creditPercent = this.creditForm.value.creditPercent;
    this.data.creditLimit = this.creditForm.value.creditLimit;
    this.service.save(this.data).subscribe((s) => {
      this.dialogRef.close();
    this.service.loadData();
    });
  }

  close(){
    this.dialogRef.close();
  }
}
