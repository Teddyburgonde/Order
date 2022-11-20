import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes 
export class Madeleine implements HasFormatter { 
    constructor(
        readonly delivery: string,
        public amount: number,
    ){}

    format() {
    return `To this address: ${this.delivery}, will be delivered ${this.amount} chocolate madeleines. Thank you for your confidence`;
    }
}