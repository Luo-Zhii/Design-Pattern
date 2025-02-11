class Discount {
    calc(value: number) {
        return value* 0.9;
    }
}

class Fees {
    calc(value: number){
        return value * 1.05 ;
    }
}

class Shipping {
    calc(){
        return 5000 
    }
}

class FacadePattern {
    discount: Discount
    fees: Fees
    shipping: Shipping
    constructor() {
        this.discount = new Discount();
        this.fees = new Fees();
        this.shipping = new Shipping();
    }
    calc(value: number) {
        value = this.discount.calc(value)
        value = this.fees.calc(value)
        value += this.shipping.calc()
        return value
    }
}
function buy(value: number) {
    const shop = new FacadePattern
    console.log(`PRICE:::${shop.calc(value)}`)
}

buy(10000)