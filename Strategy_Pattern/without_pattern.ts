function getPrice(originPrice: number, typePromotion: string = 'default') : any {
    // Discount if the customer has bought one before 
    if (typePromotion === "preOrder") {
        return originPrice * 0.8 ;
    }
    // Discount feature, if originPrice < = 200 then - 10% , else > - 30 
    if (typePromotion === "promotion"){
        return originPrice <= 200 ? originPrice * 0.6 : originPrice - 30 ; 
    }
    // Default 
    if (typePromotion === 'default') {
        return originPrice; 
    }
}

console.log(getPrice(200, 'preOrder'))