import { Client } from "./client";
import { Credit } from "./credit";
import { PaymentSchedule } from "./paymentSchedule";

export class CreditOffer{
    id:String;
    client:Client;
    credit:Credit;
    creditSum:number;
    paymentSchedule:PaymentSchedule[];
}