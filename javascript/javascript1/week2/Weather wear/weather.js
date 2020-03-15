function whatToWear(temperature) {
  let clothes = "";

    if (temperature <= 15) {
        clothes = "Wear a jacket";

    }
    else if (temperature > 16 && temperature <= 25) {
        clothes = "Wear jeans and shirt";

    }
    else {
        clothes = "Wear shorts and T-shirt";
    }
    return clothes;
}
const clothesToWear = whatToWear(29);
console.log(clothesToWear);
const clothesToWear1 = whatToWear(5);
console.log(clothesToWear1);