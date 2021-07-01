import { Component, OnInit } from '@angular/core';
import { Bank } from 'src/app/entities/bank';
import { Client } from 'src/app/entities/client';
import { Credit } from 'src/app/entities/credit';
import { CreditOffer } from 'src/app/entities/creditOffer';
import { BankService } from 'src/app/service/bankService';
import { ClientService } from 'src/app/service/clientService';
import { CreditOfferService } from 'src/app/service/creditOfferService';
import { CreditService } from 'src/app/service/creditService';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  clientEntity = Client;
  bankEntity = Bank;
  creditEntity = Credit;
  creditOfferEntity= CreditOffer;
  clientService = ClientService;
  bankService = BankService;
  creditService = CreditService;
  creditOfferService = CreditOfferService;
  constructor() { }

  ngOnInit(): void {
  }

}
