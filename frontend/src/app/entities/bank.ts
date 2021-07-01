import { Client } from "./client";
import { Credit } from "./credit";
import { TableEntityInterface } from "./tableEntityInterface";

export class Bank implements TableEntityInterface{
    id:String;
    clientList:Client[];
    creditList:Credit[];
    getColumns(): String[] {
        return ["id","clientList","creditList","passportNumber"];
    }
}