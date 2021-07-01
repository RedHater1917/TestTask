import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { Client } from "../entities/client";
import { TableServiceInterface } from "./tableServiceInterface";
import { HttpClient } from "@angular/common/http";
import { Bank } from "../entities/bank";
@Injectable({
    providedIn: "root",
  })
export class BankService implements TableServiceInterface{

    constructor(private http: HttpClient, public dialog: MatDialog) {}

    get(id: String): Observable<Bank> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Bank[]> {
        throw new Error("Method not implemented.");
    }
    save(entity: Bank): Observable<Bank> {
        throw new Error("Method not implemented.");
    }
    update(entity: Bank): Observable<Bank> {
        throw new Error("Method not implemented.");
    }
    delete(entity: Bank): Observable<Object> {
        throw new Error("Method not implemented.");
    }

}