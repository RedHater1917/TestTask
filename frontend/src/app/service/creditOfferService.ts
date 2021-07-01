import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { TableServiceInterface } from "./tableServiceInterface";
import { HttpClient } from "@angular/common/http";
import { CreditOffer } from "../entities/creditOffer";
@Injectable({
    providedIn: "root",
  })
export class CreditOfferService implements TableServiceInterface{

    constructor(private http: HttpClient, public dialog: MatDialog) {}

    get(id: String): Observable<CreditOffer> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<CreditOffer[]> {
        throw new Error("Method not implemented.");
    }
    save(entity: CreditOffer): Observable<CreditOffer> {
        throw new Error("Method not implemented.");
    }
    update(entity: CreditOffer): Observable<CreditOffer> {
        throw new Error("Method not implemented.");
    }
    delete(entity: CreditOffer): Observable<Object> {
        throw new Error("Method not implemented.");
    }

}