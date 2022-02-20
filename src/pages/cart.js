import toastr from "toastr";
import Footer from "../components/footer";
import Header from "../components/header";
import { decreaseQty, increaseQty, removeItemInCart } from "../utils/cart";
import { reRender } from "../utils/reRender";
import { $ } from "../utils/selector";
/* eslint-disable prefer-const */
const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return /* html */ `
        <div class="w-1140">
         <div class="w-980 mx-auto">
         <header>${Header.render()}</header>
         <table class="m-10">
            <thead>
               <tr>
                  <th>Tên sản phẩm</th>
                  <th>Giá sản phẩm</th>
                  <th>Số lượng</th>
                  <th></th>
               </tr>
               </thead>
               <tbody>
                  ${cart.length > 0 ? cart.map((item) => `
                     <tr>
                        <td>${item.name}</td>
                        <td>${item.price}</td>
                        <td>
                           <button data-id="${item.id}" class="btn btn-increase inline-block p-3 bg-green-500 text-white">Tăng</button>
                           <input type="number" value="${item.quantity}" class="border border-gray-400 p-3" />
                           <button data-id="${item.id}" class="btn btn-decrease inline-block p-3 bg-orange-500 text-white">Giảm</button>
                        </td>
                        <td>
                           <button data-id="${item.id}" class="btn btn-remove inline-block p-3 bg-red-500 text-white">Xóa</button>
                        </td>
                     </tr>
                  `).join("") : `
                     <tr>
                        <td colspan="4">No record</td>
                     </tr>
                  `}
               </tbody>
      </table>
      ${Footer.render()}
      </div>
    </div>
      `;
    },
    afterRender() {
        $(".btn").forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                console.log(id);
                if (btn.classList.contains("btn-increase")) {
                    increaseQty(id, () => reRender(CartPage, "#app"));
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQty(id, () => reRender(CartPage, "#app"));
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Bạn đã xóa thành công");
                    });
                }
            });
        });
    },
};

export default CartPage;