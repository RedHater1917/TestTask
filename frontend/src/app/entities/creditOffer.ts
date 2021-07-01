import { Client } from "./client";
import { Credit } from "./credit";
import { TableEntityInterface } from "./tableEntityInterface";

export class CreditOffer implements TableEntityInterface{
    id:String;
    client:Client;
    credit:Credit;
    creditSum:number;
    getColumns(): String[] {
        return ["id","client","credit","creditSum"];
    }
}