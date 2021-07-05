import { OnChanges } from '@angular/core';
import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CreditOfferService } from 'src/app/services/creditOfferService';

@Component({
  selector: 'app-credit-offer-browse',
  templateUrl: './credit-offer-browse.component.html',
  styleUrls: ['./credit-offer-browse.component.css']
})
export class CreditOfferBrowseComponent implements OnInit,OnChanges {

  @Input() active:boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private subscriptions: Subscription[] = [];
  public dataSource;
  displayedColumns: Array<string>;
  constructor(public service:CreditOfferService) {
    this.displayedColumns = ["id","client","credit","creditSum","actions"];
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
    const dataSub = this.service.offersData.subscribe(offers=>{
        this.dataSource = new MatTableDataSource(offers);
        this.dataSource.paginator = this.paginator;
    });
    this.subscriptions.push(dataSub);
  }
}
