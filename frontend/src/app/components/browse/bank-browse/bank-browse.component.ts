import { Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { BankService } from 'src/app/services/bankService';

@Component({
  selector: 'app-bank-browse',
  templateUrl: './bank-browse.component.html',
  styleUrls: ['./bank-browse.component.css']
})
export class BankBrowseComponent implements OnInit,OnChanges {
  @Input() active:boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private subscriptions: Subscription[] = [];
  public dataSource;
  displayedColumns: Array<string>;
  constructor(public service:BankService) {
    this.displayedColumns = ["id","actions"];
   }
   ngOnChanges(changes: SimpleChanges) {
    if(!this.active){
      this.subscriptions
      .forEach(s => s.unsubscribe());
    }else{
     this.ngOnInit();
    }
  }
  
  ngOnInit(): void {
    this.service.loadData();
    const dataSub = this.service.banksData.subscribe(banks=>{
        this.dataSource = new MatTableDataSource(banks);
        this.dataSource.paginator = this.paginator;
    });
    this.subscriptions.push(dataSub);
  }

}
