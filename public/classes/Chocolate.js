// classes 
export class Chocolate {
    constructor(delivery, amount) {
        this.delivery = delivery;
        this.amount = amount;
    }
    format() {
        return `To this address: ${this.delivery}, will be delivered ${this.amount} chocolate cookies. Thank you for your confidence`;
    }
}
