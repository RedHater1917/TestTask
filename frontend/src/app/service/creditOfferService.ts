import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { CreditOffer } from "../entities/creditOffer";
import { CreditOfferEditComponent } from "../components/edit/credit-offer-edit/credit-offer-edit.component";
import { DeleteDialogComponent } from "../components/delete-dialog/delete-dialog.component";
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
    createEditDialog(entity?:CreditOffer){
        let data = entity ? entity:null;
        const dialogRef = this.dialog.open(CreditOfferEditComponent, {
          data,
          width: "100%",
          maxWidth: "none",
        });
        dialogRef.afterClosed().subscribe((result) => {
          console.log("The dialog was closed");
        });
    }
    createDeleteDialog(entity:CreditOffer){
        let data = null;
        const dialogRef = this.dialog.open(DeleteDialogComponent, {
          data,
          width: "100%",
          maxWidth: "none",
        });
        dialogRef.afterClosed().subscribe((result) => {
          if(result){
              this.delete(entity).subscribe(message=>{
                  this.loadData();
              });
          }
        });
    }
}