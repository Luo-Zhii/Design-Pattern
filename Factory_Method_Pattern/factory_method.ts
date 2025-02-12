interface Options {
    name?: string;
    door?: number;
    price?: number;
    customerInfo?: Object;
}

class Car {
    name?: string;
    door?: number;
    price?: number;
    customerInfo?: Object;
    constructor({name = "Ford 20A", door = 4, price = 50000, customerInfo = {}}: Options) {
        this.name = name;
        this.door = door;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

class ServiceTransport {
    transportClass =  Car
    getInfo = (customerInfo: Options) => {
        return new this.transportClass(customerInfo)
    }
}

const transportService = new ServiceTransport()
// console.log(transportService.getInfo({customerInfo: { color: "red", owner: "John Doe" }}))

class Truck {
    name?: string;
    door?: number;
    price?: number;
    customerInfo?: Object;
    constructor({name = "Truck 10", door = 8, price = 150000, customerInfo = {}}: Options) {
        this.name = name;
        this.door = door;
        this.price = price;
        this.customerInfo = customerInfo;
    }
}

class TruckService extends ServiceTransport {
    transportClass = Truck
}
const truckService = new TruckService
console.log(truckService.getInfo({customerInfo: { color: "blue", owner: "Jane Doe" }}))