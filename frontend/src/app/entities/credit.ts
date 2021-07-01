import { TableEntityInterface } from "./tableEntityInterface";

export class Credit implements TableEntityInterface{
    id:String;
    creditLimit:number;
    creditPercent:number;

    getColumns(): String[] {
        return ["id","creditLimit","creditPercent"];
    }
}