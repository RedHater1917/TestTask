import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/entities/client';
import { Credit } from 'src/app/entities/credit';
import { CreditOffer } from 'src/app/entities/creditOffer';
import { PaymentSchedule } from 'src/app/entities/paymentSchedule';
import { PaymentScheduleSettings } from 'src/app/entities/paymentScheduleSettings';
import { ClientService } from 'src/app/services/clientService';
import { CreditOfferService } from 'src/app/services/creditOfferService';
import { CreditService } from 'src/app/services/creditService';

@Component({
  selector: 'app-credit-offer-edit',
  templateUrl: './credit-offer-edit.component.html',
  styleUrls: ['./credit-offer-edit.component.css']
})
export class CreditOfferEditComponent{
  clients:Client[];
  credits:Credit[];
  creditForm: FormGroup;
  type = "Annuity";
  public dataSource;
  displayedColumns: Array<string>;
  constructor(public fb: FormBuilder, private service:CreditOfferService, private creditService:CreditService,
    private clientService:ClientService,public dialogRef: MatDialogRef<CreditOfferEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: CreditOffer){
      this.creditForm = this.fb.group({
        monthNum: ["",Validators.required],
        creditSum:["",Validators.required],
        credit:["",Validators.required],
        client:["",Validators.required],
        annuity:[false,Validators.required],
      });
      if(this.data==null){
        this.data = new CreditOffer();
      }else{
        this.creditForm.setValue({creditSum: data.creditSum, client: data.client,
                                   credit: data.credit});
        this.service.getPaymentScheduleByOffer(this.data.id).subscribe(schedule=>{
          this.initScheduleData(schedule);
        });
      }
      this.clientService.getAll().subscribe(all=>{
        this.clients = all;
      });
      this.creditService.getAll().subscribe(all=>{
        this.credits = all;
      });
      this.displayedColumns = ["paymentDate","paymentSum","creditBodySum","creditPercentSum"];

    }
  
  calculatePaymentSchedule(){
    let settings = new PaymentScheduleSettings(this.data,this.creditForm.value.credit,
                                                this.creditForm.value.creditSum,this.creditForm.value.monthNum,
                                                this.creditForm.value.annuity);
    this.service.calculatePaymentSchedule(settings).subscribe(schedule=>{
     this.initScheduleData(schedule);
    })
  }  

  initScheduleData(schedule:PaymentSchedule[]){
    this.data.paymentSchedule = schedule;
    this.dataSource = new MatTableDataSource(schedule);
  }
  onSubmit() {
    this.data.client = this.creditForm.value.client;
    this.data.credit = this.creditForm.value.credit;
    this.data.creditSum = this.creditForm.value.creditSum;
    this.service.save(this.data).subscribe((s) => {
      this.dialogRef.close();
      this.service.loadData();
    });
  }

  changeName(event:MatSlideToggleChange){
    if(event.checked){
      this.type = "Differential";
    }else{
      this.type = "Annuity";
    }
  }

  close(){
    this.dialogRef.close();
  }
}
