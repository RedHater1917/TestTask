import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/services/clientService';

@Component({
  selector: 'app-client-browse',
  templateUrl: './client-browse.component.html',
  styleUrls: ['./client-browse.component.css']
})
export class ClientBrowseComponent implements OnInit,OnChanges {
  @Input() active:boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private subscriptions: Subscription[] = [];
  public dataSource;
  displayedColumns: Array<string>;
  constructor(public service:ClientService) {
    this.displayedColumns = ["id","fio","email","passportNumber","actions"];
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
    const dataSub = this.service.clientsData.subscribe(clients=>{
        this.dataSource = new MatTableDataSource(clients);
        this.dataSource.paginator = this.paginator;
    });
    this.subscriptions.push(dataSub);
  }

}
