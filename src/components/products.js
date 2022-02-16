import { getAll } from "../api/product";

const Products = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
        <h2 class="title text-xl uppercase hover:underline py-4">Điện thoại nổi bật</h2>
         <div class="grid grid-cols-4 gap-8">
            ${data.map((product) => `
               <div class="w-[200px] h-[300px] rounded shadow-md">
                  <div class="">
                     <a href="/detailProduct/">
                        <img
                           src="${product.image}"
                           alt="">
                     </a>
                  </div>
                  <div class="text-sm uppercase text-center py-1">
                     <a href="/detailProduct/">${product.name}</a>
                  </div>
                  <div class=" text-center">
                     <p class="special-price">${product.price}&nbsp;₫</p>
                  </div>
               </div>
            `).join("")}
         </div>
      `;
    },
};

export default Products;