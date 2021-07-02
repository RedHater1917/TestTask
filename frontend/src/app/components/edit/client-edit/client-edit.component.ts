import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/service/clientService';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent{

  clientForm: FormGroup;
  constructor(
    public fb: FormBuilder, private service:ClientService,
    public dialogRef: MatDialogRef<ClientEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Client){
      this.clientForm = this.fb.group({
        fio: [""],
        email: ["",Validators.email],
        passportNumber:[""]
      });
      if(this.data!=null){
        this.clientForm.setValue({fio:data.fio, email: data.email, passportNumber:data.passportNumber})
      }
    }
  onSubmit() {
    if(this.data == null){
      this.data = new Client();
    }
    this.data.fio = this.clientForm.value.fio;
    this.data.email = this.clientForm.value.email;
    this.data.passportNumber = this.clientForm.value.passportNumber;
    this.service.save(this.data).subscribe((s) => {
      this.dialogRef.close();
      this.service.loadData();
    });
  }
  close(){
    this.dialogRef.close();
  }
}
