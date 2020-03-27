let boughtCandyPrices = [];
let amountToSpend = Math.random() * 100;
function addCandy(candyType, weight) {

    let candyPrice = 0;

    if (candyType === "Sweet") {
        candyPrice = weight * 0.5;
    }
    else if (candyType === "Chocolate") {
        candyPrice = weight * 0.7;
    }
    else if (candyType === "Toffee") {
        candyPrice = weight * 1.1;
    }
    else if (candyType === "Chewing-gum") {
        candyPrice = weight * 0.03;
    }
    else {
        console.log("You cannot buy this candy!");
    }

    if (candyPrice > 0) {
        boughtCandyPrices.push(candyPrice);
    }
    return candyPrice;
}

function canBuyMoreCandy() {
    let totalPrice = 0;
    for (let index = 0; index < boughtCandyPrices.length; index++) {
        totalPrice += boughtCandyPrices[index];
    }

    if (totalPrice <= amountToSpend) {
        console.log("You can buy more, so please do!");
    }
    else {
        console.log("Enough candy for you!");

    }

}

addCandy("Sweet", 50);
console.log(boughtCandyPrices);
console.log("AmountToSpend=" + amountToSpend);
console.log(canBuyMoreCandy());