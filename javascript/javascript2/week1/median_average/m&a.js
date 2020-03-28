const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
function calculateAverage(value) {
    let total = 0;
    for (var i = 0; i < value.length; i++) {
        total += value[i];
    }
    const average = (total / (value.length)).toFixed(2);
    return average;

}

function calculateMedian(values) {
    const arrSort = values.sort();
    const mid = Math.ceil(values.length / 2);
    let median;
    if ((values.length) % 2 == 0) {
        median = (arrSort[mid] + arrSort[mid - 1]) / 2;
    }
    else {
        median = arrSort[mid];
    }
    return median;
}

function getMedianAndAverage(arrayOfNumbers)
{
    let averageVal = calculateAverage(housePrices);
    let medianVal = calculateMedian(housePrices);

    let price = new Object();
    price.average = averageVal;
    price.median = medianVal;

    return price;
}

let price = getMedianAndAverage(housePrices)
const ulTag = document.querySelector('ul');
const liTag1 = document.createElement('li');
liTag1.innerHTML = "The house prices are: " + housePrices.join(", ");
ulTag.appendChild(liTag1);
const liTag2 = document.createElement('li');
liTag2.innerHTML = "The average price is: " + price.average;
ulTag.appendChild(liTag2);
const liTag3 = document.createElement('li');
liTag3.innerHTML = "The median price is: " + price.median;
ulTag.appendChild(liTag3);
