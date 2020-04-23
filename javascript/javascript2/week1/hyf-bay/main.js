console.log('Script loaded');

const products = getAvailableProducts();

function renderProducts(products) {
    const productsUl = document.querySelector('section.products ul');
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}
renderProducts(products);


