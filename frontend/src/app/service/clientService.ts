import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BehaviorSubject, Observable } from "rxjs";
import { Client } from "../entities/client";
import { HttpClient } from "@angular/common/http";
import { ClientEditComponent } from "../components/edit/client-edit/client-edit.component";
import { DeleteDialogComponent } from "../components/delete-dialog/delete-dialog.component";
@Injectable({
    providedIn: "root",
  })
export class ClientService{

    constructor(private http: HttpClient, public dialog: MatDialog) {}
    public clientsData: BehaviorSubject<Client[]> = new BehaviorSubject<Client[]>(null);
    
    loadData(){
        this.http.get<Client[]>(`api/client/`).subscribe(clients=>{
            this.clientsData.next(clients);
        });
    }
    get(id: String): Observable<Client> {
       return this.http.get<Client>(`api/client/${id}`);
    }
    getAll(): Observable<Client[]> {
        return this.http.get<Client[]>(`api/client/`);
    }
    getNewBankClients(bankId: String): Observable<Client[]> {
        return this.http.get<Client[]>(`api/client/newBankClients/${bankId}`);
     }
    save(entity: Client): Observable<Client> {
        return this.http.post<Client>(`api/client/save`,entity);
    }
    update(entity: Client): Observable<String> {
        return this.http.post<String>(`api/client/update`,entity);
    }
    delete(entity: Client): Observable<Object> {
        return this.http.post<Object>(`api/client/delete`,entity);
    }
    createEditDialog(entity?:Client){
        let data = entity ? entity:null;
        const dialogRef = this.dialog.open(ClientEditComponent, {
          data,
          width: "100%",
          maxWidth: "none",
        });
        dialogRef.afterClosed().subscribe((result) => {
          console.log("The dialog was closed");
        });
    }
    createDeleteDialog(entity:Client){
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