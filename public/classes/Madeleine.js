// classes 
export class Madeleine {
    constructor(delivery, amount) {
        this.delivery = delivery;
        this.amount = amount;
    }
    format() {
        return `To this address: ${this.delivery}, will be delivered ${this.amount} chocolate madeleines. Thank you for your confidence`;
    }
}
