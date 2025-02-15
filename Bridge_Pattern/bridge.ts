// Abstract
class PaymentProcess {
    pay(amount: number){}
}
//Implementations 
class VisaPayment extends PaymentProcess {
    cardNumber: number
    expiryDate: number
    cvv: number
    constructor(cardNumber: number, expiryDate: number, cvv: number) {
        super()
        this.cardNumber = cardNumber
        this.expiryDate = expiryDate
        this.cvv = cvv
    }
    pay(amount: number){
        console.log(`Visa payment processed successfully for ${amount} USD with Visa card ${this.cardNumber}`)
    }
}
class MomoPayment extends PaymentProcess {
    phoneNumber: number

    constructor(phoneNumber: number) {
        super()
        this.phoneNumber = phoneNumber
    }
    pay(amount: number){
        console.log(`Momo payment processed successfully for ${amount} USD with Visa card ${this.phoneNumber}`)
    }
}
// Abstract
class MemberRegistration {
    paymentProcess: PaymentProcess
    constructor(paymentProcess: PaymentProcess){
        this.paymentProcess = paymentProcess
    }
    register(){
        const amount: number = 100
        this.paymentProcess.pay(amount)
        console.log("Registration completed successfully")
    }
}

const visaPayment = new VisaPayment(1234567890123456, 2025, 123)
const memberRegistrationVisa = new MemberRegistration(visaPayment)
memberRegistrationVisa.register()

const momoPayment = new MomoPayment(84355249574)
const memberRegistrationMomo = new MemberRegistration(momoPayment)
memberRegistrationMomo.register()