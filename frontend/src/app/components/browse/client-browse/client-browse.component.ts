import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/app/entities/client';
import { ClientService } from 'src/app/service/clientService';

@Component({
  selector: 'app-client-browse',
  templateUrl: './client-browse.component.html',
  styleUrls: ['./client-browse.component.css']
})
export class ClientBrowseComponent implements OnInit {
  clients:Client[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public dataSource;
  displayedColumns: Array<string>;
  constructor(public service:ClientService) {
    this.displayedColumns = ["id","fio","email","passportNumber","actions"];
   }
  
  ngOnInit(): void {
    this.service.getAll().subscribe(all=>{
      this.dataSource = new MatTableDataSource(all);
      this.dataSource.paginator = this.paginator;
    })
  }

}
