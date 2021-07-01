import { Component, Input, OnInit } from '@angular/core';
import { TableEntityInterface } from 'src/app/entities/tableEntityInterface';
import { TableServiceInterface } from 'src/app/service/tableServiceInterface';

@Component({
  selector: 'app-entity-table',
  templateUrl: './entity-table.component.html',
  styleUrls: ['./entity-table.component.css']
})
export class EntityTableComponent implements OnInit {
  @Input("service") service: TableServiceInterface;
  @Input("entity") entity: TableEntityInterface;

  constructor() { }

  ngOnInit(): void {
  }

}
