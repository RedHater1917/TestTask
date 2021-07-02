import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CreditOffer } from "../entities/creditOffer";
@Injectable({
    providedIn: "root",
  })
export class CreditOfferService{

    constructor(private http: HttpClient, public dialog: MatDialog) {}
    public offersData: BehaviorSubject<CreditOffer[]> = new BehaviorSubject<CreditOffer[]>(null);
    
    loadData(){
        this.http.get<CreditOffer[]>(`api/creditOffer/`).subscribe(creditOffer=>{
            this.offersData.next(creditOffer);
        });
    }
    get(id: String): Observable<CreditOffer> {
        return this.http.get<CreditOffer>(`api/creditOffer/${id}`);
     }
     getAll(): Observable<CreditOffer[]> {
         return this.http.get<CreditOffer[]>(`api/creditOffer/`);
     }
     save(entity: CreditOffer): Observable<CreditOffer> {
         return this.http.post<CreditOffer>(`api/creditOffer/save`,entity);
     }
     update(entity: CreditOffer): Observable<String> {
         return this.http.post<String>(`api/creditOffer/update`,entity);
     }
     delete(entity: CreditOffer): Observable<Object> {
         return this.http.post<Object>(`api/creditOffer/delete`,entity);
     }

}