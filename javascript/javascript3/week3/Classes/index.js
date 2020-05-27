const productUl = document.getElementById("products");
const totalPrice = document.getElementById("total");
const username = document.getElementById("user");
const productPrice = document.getElementById("price");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrencyWithApi(currency) {
        const apiUrl = `https://api.exchangeratesapi.io/latest?base=DKK`;
        return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                return this.price * data.rates[currency]

            })
            .catch(err => console.log(err));
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        const newProducts = this.products.filter((existingProduct) => {
            return existingProduct.name !== product.name
        })
        this.products = newProducts;
    }

    searchProduct(productName) {
        const searchedProduct = this.products.filter(product => product.name.toLowerCase() === productName.toLowerCase());
        return searchedProduct;
    }

    renderProducts() {
        this.products.forEach((product) => {
            const li = document.createElement('li');
            const liPrice = document.createElement("li");
            li.textContent = `${product.name}`;
            liPrice.textContent = `${product.price}`;
            productUl.appendChild(li);
            productPrice.appendChild(liPrice);
        })
        return products;
    }

    getTotal() {
        const totalAmount = this.products.map(product => product.price).reduce((acc, currentvalue) => acc + currentvalue);
        totalPrice.textContent = `The total amount is: ${totalAmount} kr`;
        console.log(totalAmount);
    }

    getUser() {
        const url = 'https://jsonplaceholder.typicode.com/users/1'
        fetch(url)
            .then(response => response.json())
            .then(result => {
                const user = result.username;
                username.textContent = `Username : ${user}`;
            })
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product('Flat-screen', 5000);
const mobile = new Product('Mobile-phone', 2000);
const microwave = new Product('Microwave-oven', 1000);
const refridgerator = new Product('Refridgerator', 3000);
const playStation = new Product('X-Box', 2500);
const coffeeMaker = new Product('Coffee-Maker', 3000);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(microwave);
shoppingCart.addProduct(refridgerator);
shoppingCart.addProduct(playStation);
shoppingCart.addProduct(coffeeMaker);

shoppingCart.removeProduct(flatscreen);
console.log(shoppingCart);

console.log(shoppingCart.searchProduct("x-box"));

shoppingCart.getUser();
const finalCart = shoppingCart.renderProducts()

shoppingCart.getTotal();
const plant = new Product('plant', 50);
shoppingCart.addProduct(plant);
plant.convertToCurrencyWithApi('USD').then(value => console.log(value));

