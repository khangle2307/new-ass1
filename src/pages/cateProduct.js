import Footer from "../components/footer";
import Header from "../components/header";
import { GetProduct } from "../api/category";
import { getAll } from "../api/product";

const CateProduct = {
    async render() {
        const { data } = await GetProduct();
        const product = await getAll();
        const dataItem = product.data;
        console.log(dataItem);
        return /* html */ `
        <div class="w-1140">
         <div class="w-980 mx-auto">
            <header>
               ${Header.render()}
            </header>
            <main class="flex justify-between m-6">
             <div class="category-list">
               <h2>Danh mục</h2>
               <ul>
                  ${data.map((cate) => `
                     <li><a href="./cateProduct/products">${cate.name}</a><span class="mx-4 p-1 rounded bg-slate-400">${cate.products.length}</span></li>
                  `).join("")}
               </ul>
             </div>
             <div class="product-list grid grid-cols-4">
                 ${dataItem.map((item) => `
                     <div>
                        <a href="./product/${item.id}"><img class="w-[150px]" src="${item.image}" alt=""></a>
                        <a href="./product/${item.id}"><p>${item.name}</p></a>
                        <p>${item.price}$</p>
                     </div>
                 `).join("")}
             </div>
            </main>
            <footer>
               ${Footer.render()}
            </footer>
         </div>
        </div>
        `;
    },
};

export default CateProduct;