class MomoPayment {
    cardNumber: number
    expiryDate: Date 
    cvv: number
    amount: number
    constructor(cardNumber: number, expiryDate: Date, cvv: number, amount: number){
        this.cardNumber = cardNumber
        this.expiryDate = new Date(expiryDate)
        this.cvv = cvv
        this.amount = amount
    }
}

class VisaPayment {
    processPayment(payment: MomoPayment){
        console.log(`Visa payment processed successfully for ${payment.amount} USD with Visa card ${payment.cardNumber}`)
    }
}


class VisaPaymentAdapter {
    momoPayment: MomoPayment
    constructor(momoPayment: MomoPayment){
        this.momoPayment = momoPayment
    }

    payWithVisa(visaPayment: VisaPayment) {
        const convertedPayment = this.convertToVisaPayment(this.momoPayment)
        visaPayment.processPayment(convertedPayment)
    }

    convertToVisaPayment(momoPayment: MomoPayment) {
        const rateChange = 25000
        const visaAmount = momoPayment.amount / rateChange
        const visaPayment = {
            cardNumber: momoPayment.cardNumber,
            expiryDate: new Date(momoPayment.expiryDate),
            cvv: momoPayment.cvv,
            amount: visaAmount,
        }
        return visaPayment
    }
}

const momoPayment = new MomoPayment(1234567890123456, new Date('2025-12-31'), 123, 10000)
const visaPaymentAdapter = new VisaPaymentAdapter(momoPayment)
const visaPayment = new VisaPayment()
visaPaymentAdapter.payWithVisa(visaPayment)

