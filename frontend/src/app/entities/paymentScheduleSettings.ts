import { Credit } from "./credit";
import { CreditOffer } from "./creditOffer";

export class PaymentScheduleSettings{
    creditOffer:CreditOffer;
    credit:Credit;
    creditSum:number;
    numOfMonths:number;
    differential:boolean;
    public constructor(offer:CreditOffer,credit:Credit,creditSum:number,numOfMonths:number,diff:boolean){
        this.creditOffer = offer;
        this.credit = credit;
        this.creditSum = creditSum;
        this.numOfMonths = numOfMonths;
        this.differential = diff;
    }
}