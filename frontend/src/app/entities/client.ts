import { TableEntityInterface } from "./tableEntityInterface";

export class Client implements TableEntityInterface{
    id:String;
    fio:String;
    email:String;
    passportNumber:number;
    
    getColumns(): String[] {
        return ["id","fio","email","passportNumber"];
    }
}