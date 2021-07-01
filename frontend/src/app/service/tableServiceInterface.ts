import { Observable } from "rxjs";

export interface TableServiceInterface<T>{
    get(id:String):Observable<T>;
    getAll():Observable<T[]>;
    save(entity:T):Observable<T>;
    update(entity:T):Observable<T>;
    delete(entity:T):Observable<Object>;
}