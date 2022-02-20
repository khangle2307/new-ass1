import "remixicon/fonts/remixicon.css";

const Cart = {
    render() {
        return /* html */ `
            <div class="mx-3">
                <a src="../pages/cart.js"><i class="ri-shopping-bag-line text-white relative text-3xl"></i></a>
                <p class="text-white absolute top-0">0</p>
            </div>
     `;
    },
};

export default Cart;