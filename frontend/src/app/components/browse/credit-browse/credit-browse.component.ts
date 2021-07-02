import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CreditService } from 'src/app/service/creditService';

@Component({
  selector: 'app-credit-browse',
  templateUrl: './credit-browse.component.html',
  styleUrls: ['./credit-browse.component.css']
})
export class CreditBrowseComponent implements OnInit {

  @Input() active:boolean;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private subscriptions: Subscription[] = [];
  public dataSource;
  displayedColumns: Array<string>;
  constructor(public service:CreditService) {
    this.displayedColumns = ["id","creditLimit","creditPercent","actions"];
    this.service.loadData();
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
    const dataSub = this.service.creditsData.subscribe(credits=>{
        this.dataSource = new MatTableDataSource(credits);
        this.dataSource.paginator = this.paginator;
    });
    this.subscriptions.push(dataSub);
  }

}
