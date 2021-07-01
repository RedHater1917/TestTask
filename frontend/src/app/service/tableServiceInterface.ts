import { Observable } from "rxjs";

export interface TableServiceInterface{
    get(id:String):Observable<Object>;
    getAll():Observable<Object[]>;
    save(entity):Observable<Object>;
    update(entity):Observable<Object>;
    delete(entity):Observable<Object>;
}