    class Service {
        name: string;
        doors: number; 
        price: number; 
        constructor(name: string = "truck 10", doors: number= 6, price: number = 50000 ) {
            this.name = name;
            this.doors = doors;
            this.price = price;
        }

        public static readonly getInfo = (cargoVolume: number) => {
            switch(cargoVolume){
                case 10: 
                return new Service()
                case 20: 
                return new Service("truck 20", 3, 15000)
            }
        }
    }
console.log(Service.getInfo(20))