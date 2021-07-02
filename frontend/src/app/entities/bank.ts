import { Client } from "./client";
import { Credit } from "./credit";

export class Bank{
    id:String;
    clientList:Client[] = [];
    creditList:Credit[] = [];
}