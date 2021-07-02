import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Credit } from "../entities/credit";
@Injectable({
    providedIn: "root",
  })
export class CreditService{

    constructor(private http: HttpClient, public dialog: MatDialog) {}
    public creditsData: BehaviorSubject<Credit[]> = new BehaviorSubject<Credit[]>(null);

    loadData(){
        this.http.get<Credit[]>(`api/credit/`).subscribe(credits=>{
            this.creditsData.next(credits);
        });
    }
    get(id: String): Observable<Credit> {
        return this.http.get<Credit>(`api/credit/${id}`);
     }
     getAll(): Observable<Credit[]> {
         return this.http.get<Credit[]>(`api/credit/`);
     }
     save(entity: Credit): Observable<Credit> {
         return this.http.post<Credit>(`api/credit/save`,entity);
     }
     update(entity: Credit): Observable<String> {
         return this.http.post<String>(`api/credit/update`,entity);
     }
     delete(entity: Credit): Observable<Object> {
         return this.http.post<Object>(`api/credit/delete`,entity);
     }


}