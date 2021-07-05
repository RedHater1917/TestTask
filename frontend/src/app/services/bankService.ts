import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Bank } from "../entities/bank";
import { BankEditComponent } from "../components/edit/bank-edit/bank-edit.component";
import { DeleteDialogComponent } from "../components/delete-dialog/delete-dialog.component";
@Injectable({
    providedIn: "root",
  })
export class BankService{

    constructor(private http: HttpClient, public dialog: MatDialog) {}
    public banksData: BehaviorSubject<Bank[]> = new BehaviorSubject<Bank[]>(null);

    loadData(){
        this.http.get<Bank[]>(`api/bank/`).subscribe(banks=>{
            this.banksData.next(banks);
        });
    }
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

    createEditDialog(entity?:Bank){
        let data = entity ? entity:null;
        const dialogRef = this.dialog.open(BankEditComponent, {
          data,
          width: "100%",
          maxWidth: "none",
        });
        dialogRef.afterClosed().subscribe((result) => {
          console.log("The dialog was closed");
        });
    }
    createDeleteDialog(entity:Bank){
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