console.log('Script loaded');
let products = [];

const testProductNames = ['Flat screen', 'Mobile phone', 'Wallet'];

function renderProducts() {
    const productsAvailable = getAvailableProducts();
    const ulTag = document.querySelector("section > ul");

    for (let i = 0; i < productsAvailable.length; i++) {
        const liTag = document.createElement('li');
        const childUlTag = document.createElement("ul");
        for (let j = 1; j <= 4; j++) {
            const childLiTag = document.createElement("li");
            childLiTag.setAttribute('class', Object.keys(productsAvailable[i])[j]);
            childLiTag.innerHTML = Object.values(productsAvailable[i])[j];
            childUlTag.appendChild(childLiTag);
        }
        liTag.appendChild(childUlTag);
        ulTag.appendChild(liTag);
    }
}
function getAvailableProducts() {
    for (var i = 0; i < testProductNames.length; i++) {
        products.push(
            {
                id: 23771821 + i,
                name: testProductNames[i],
                price: 4000,
                rating: 4.2,
                shipsTo: ['denmark', 'germany']

            });
    }
    return products;
}
renderProducts();