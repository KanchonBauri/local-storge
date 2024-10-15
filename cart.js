const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;
    console.log(product, quantity);

    // input add hober pore, input fild  clear korar jonno
    productField.value = '';
    quantityField.value = '';

    displayProduct(product, quantity)
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}

// console.log("helo");
