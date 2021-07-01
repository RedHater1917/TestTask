import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Bank } from "../entities/bank";
@Injectable({
    providedIn: "root",
  })
export class BankService{

    constructor(private http: HttpClient, public dialog: MatDialog) {}

   
    get(id: String): Observable<Bank> {
        return this.http.get<Bank>(`api/bank/${id}`);
     }
     getAll(): Observable<Bank[]> {
         return this.http.get<Bank[]>(`api/bank/`);
     }
     save(entity: Bank): Observable<Bank> {
         return this.http.post<Bank>(`api/bank/save`,entity);
     }
     update(entity: Bank): Observable<String> {
         return this.http.post<String>(`api/bank/update`,entity);
     }
     delete(entity: Bank): Observable<Object> {
         return this.http.post<Object>(`api/bank/delete`,entity);
     }
 
}