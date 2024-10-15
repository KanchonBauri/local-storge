const addProduct = () => {
    const productField = document.getElementById('product-name');
    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;
    console.log(product, quantity);

    // input add hober pore, input fild  clear korar jonno
    productField.value = '';
    quantityField.value = '';

    displayProduct(product, quantity);
    saveProductToLocalStorage(product, quantity);
}
// display product 
const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`
    ul.appendChild(li);
}

const getStoredShoppingCart = () => {
    const storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
    return cart;
}

// saveProductToLocalStorage  
const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    // console.log(cart);
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}


const displayProductsFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart();
    // console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        // console.log(product, quantity);
        displayProduct(product, quantity)
    }
}

displayProductsFromLocalStorage();