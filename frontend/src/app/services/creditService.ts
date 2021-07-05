import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Credit } from "../entities/credit";
import { CreditEditComponent } from "../components/edit/credit-edit/credit-edit.component";
import { DeleteDialogComponent } from "../components/delete-dialog/delete-dialog.component";
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
    getNewBankCredits(bankId: String): Observable<Credit[]> {
      return this.http.get<Credit[]>(`api/credit/newBankCredits/${bankId}`);
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
    createEditDialog(entity?:Credit){
        let data = entity ? entity:null;
        const dialogRef = this.dialog.open(CreditEditComponent, {
          data,
          width: "100%",
          maxWidth: "none",
        });
        dialogRef.afterClosed().subscribe((result) => {
          console.log("The dialog was closed");
        });
    }
    createDeleteDialog(entity:Credit){
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