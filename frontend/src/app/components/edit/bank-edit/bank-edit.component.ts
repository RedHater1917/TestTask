import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Bank } from 'src/app/entities/bank';
import { Client } from 'src/app/entities/client';
import { Credit } from 'src/app/entities/credit';
import { BankService } from 'src/app/service/bankService';
import { ClientService } from 'src/app/service/clientService';
import { CreditService } from 'src/app/service/creditService';

@Component({
  selector: 'app-bank-edit',
  templateUrl: './bank-edit.component.html',
  styleUrls: ['./bank-edit.component.css']
})
export class BankEditComponent implements OnInit {

  constructor(private service:BankService,private clientService:ClientService,
              private creditService:CreditService, public dialogRef: MatDialogRef<BankEditComponent>,
              @Inject(MAT_DIALOG_DATA) public data: Bank) {
                if(this.data == null){
                  this.data = new Bank();
                  this.clientService.getAll().subscribe(all=>{
                    this.allClients = all;
                  })
                }else{
                  this.clientService.getNewBankClients(this.data.id).subscribe(all=>{
                    this.allClients = all;
                  })
                }
               }
  allClients:Client[];
  allCredits:Credit[];
  ngOnInit(): void {
    console.log(this.data);
  }
  addClient(client){
    this.data.clientList.push(client);
    this.allClients.splice(this.allClients.indexOf(client),1);
  }
  addCredit(credit){
    this.data.creditList.push(credit);
    this.allCredits.splice(this.allCredits.indexOf(credit),1);
  }
  removeClient(client){
    this.allClients.push(client);
    this.data.clientList.splice(this.data.clientList.indexOf(client),1);
  }
  removeCredit(credit){
    this.allCredits.push(credit);
    this.data.creditList.splice(this.data.creditList.indexOf(credit),1);
  }
  save(){
      this.service.save(this.data).subscribe(savedData=>{
        this.afterSaving();
      })
  }
  
  private afterSaving(){
    this.dialogRef.close();
    this.service.loadData();
  }
  close(){
    this.dialogRef.close();
  }

}
