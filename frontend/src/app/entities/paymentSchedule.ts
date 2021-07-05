import { CreditOffer } from "./creditOffer";

export class PaymentSchedule{
    id:String;
    paymentDate:Date;
    paymentSum:number;
    creditBodySum:number;
    creditPercentSum:number;
    offer:CreditOffer;
}