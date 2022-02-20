/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line prefer-const
let cart = [];

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

export const addToCart = (newProduct, next) => {
    const existProduct = cart.find((item) => item.id === newProduct.id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        existProduct.quanlity += newProduct.quanlity;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    next();
};