import { Credit } from "./credit";
import { CreditOffer } from "./creditOffer";

export class PaymentScheduleSettings{
    creditOffer:CreditOffer;
    credit:Credit;
    creditSum:number;
    numOfMonths:number;
    annuity:boolean;
    public constructor(offer:CreditOffer,credit:Credit,creditSum:number,numOfMonths:number,annuity:boolean){
        this.creditOffer = offer;
        this.credit = credit;
        this.creditSum = creditSum;
        this.numOfMonths = numOfMonths;
        this.annuity = annuity;
    }
}