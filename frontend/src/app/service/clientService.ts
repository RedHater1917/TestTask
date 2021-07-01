import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { Client } from "../entities/client";
import { TableServiceInterface } from "./tableServiceInterface";
import { HttpClient } from "@angular/common/http";
@Injectable({
    providedIn: "root",
  })
export class ClientService implements TableServiceInterface<Client>{

    constructor(private http: HttpClient, public dialog: MatDialog) {}

    get(id: String): Observable<Client> {
        throw new Error("Method not implemented.");
    }
    getAll(): Observable<Client[]> {
        throw new Error("Method not implemented.");
    }
    save(entity: Client): Observable<Client> {
        throw new Error("Method not implemented.");
    }
    update(entity: Client): Observable<Client> {
        throw new Error("Method not implemented.");
    }
    delete(entity: Client): Observable<Object> {
        throw new Error("Method not implemented.");
    }

}