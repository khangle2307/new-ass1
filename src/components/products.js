import { getAll } from "../api/product";

const Products = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        <h2 class="title text-xl uppercase hover:underline py-4">Điện thoại nổi bật</h2>
         <div class="flex gap-4">
           ${data.map((product) => `
            <div class="w-[250px] h-[300px] rounded shadow-md">
               <div class="">
               <a href="">
                  <img
                     src="${product.image}"
                     alt="">
               </a>
               </div>
               <div class="text-sm uppercase text-center py-1">
               <a href="">${product.name}</a>
               </div>
               <div class=" text-center">
               <p class="special-price">${product.price}&nbsp;₫</p>
            </div>
           `).join("")}
         </div>
      `;
    },
};

export default Products;