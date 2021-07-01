import { Client } from "./client";
import { Credit } from "./credit";

export class CreditOffer{
    id:String;
    client:Client;
    credit:Credit;
    creditSum:number;
}