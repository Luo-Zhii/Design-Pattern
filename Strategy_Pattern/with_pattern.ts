    function preOrderPrice(originPrice: number) {
        return originPrice * 0.8 ;
    }

    function promotionPrice(originPrice: number){
        return originPrice <= 200 ? originPrice * 0.6 : originPrice - 30 ; 
    }

    function defaultPrice(originPrice: number) {
        return originPrice; 
    }

    function getPriceStrategy (originPrice: number, typePromotion: string) {
        // Discount if the customer has bought one before 
        if (typePromotion === "preOrder") {
            return preOrderPrice(originPrice)
        }
        // Discount feature, if originPrice < = 200 then - 10% , else > - 30 
        if (typePromotion === "promotion"){
            return promotionPrice(originPrice)
        }
        // Default 
        if (typePromotion === 'default') {
            return defaultPrice(originPrice)  
        }
    }
    console.log(getPriceStrategy(200, 'preOrder'))

    // Senior code

    const getPriceStrategyState:  Record<string, (originPrice: number) => number> = {
        preOrder: preOrderPrice,
        promotion: promotionPrice,
        default: defaultPrice
    } 
    function  getPrice2(originPrice: number, typePromotion: string = 'default') {
        return getPriceStrategyState[typePromotion](originPrice)
    }
    console.log(getPrice2(200, 'preOrder'))