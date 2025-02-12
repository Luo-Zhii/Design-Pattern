const serviceLogistic = (cargoVolume: number) => {
    switch(cargoVolume){
        case 10 :
            return {
                myType : "truck 10",
                doors: 6 ,
                price : 5000, 
            }
        case 20 :
            return {
                myType : "truck 20",
                doors: 3 ,
                price : 15000, 
            }
    }
}

console.log(serviceLogistic(10))