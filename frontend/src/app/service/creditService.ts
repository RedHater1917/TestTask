import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { TableServiceInterface } from "./tableServiceInterface";
import { HttpClient } from "@angular/common/http";
import { Credit } from "../entities/credit";
@Injectable({
    providedIn: "root",
  })
export class CreditService implements TableServiceInterface{

    constructor(private http: HttpClient, public dialog: MatDialog) {}

    get(id: String): Observable<Credit> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Credit[]> {
        throw new Error("Method not implemented.");
    }
    save(entity: Credit): Observable<Credit> {
        throw new Error("Method not implemented.");
    }
    update(entity: Credit): Observable<Credit> {
        throw new Error("Method not implemented.");
    }
    delete(entity: Credit): Observable<Object> {
        throw new Error("Method not implemented.");
    }

}