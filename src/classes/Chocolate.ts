import { HasFormatter } from "../interfaces/HasFormatter.js";

// classes 
export class Chocolate implements HasFormatter { 
    constructor(
        public delivery: string,
        public amount: number,
    ){}

    format() {
    return `To this address: ${this.delivery}, will be delivered ${this.amount} chocolate cookies. Thank you for your confidence`;
    }
}