const numbers = [1, 2, 3, 4];
const oddNumbers = numbers.filter(number => number % 2 !== 0);
const doubledNumbers = oddNumbers.map(num => num * 2);
console.log("The doubled numbers are " + doubledNumbers);
