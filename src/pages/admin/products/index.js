import toastr from "toastr";
import { paginate, remove } from "../../../api/product";
import AdminNav from "../../../components/AdminNav";
import { reRender } from "../../../utils/reRender";

const AdminProducts = {
    async render() {
        const data = await paginate(1, 6);
        console.log(data.data);
        return /* html */`
            <div class="min-h-full">
            ${AdminNav.render()}
            <div class="lg:flex lg:items-center lg:justify-between my-4">
            <div class="flex-1 min-w-0">
               <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Quản lý sản phẩm</h2>
               <div class="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                  <div class="mt-2 flex items-center text-sm text-gray-500">
                  Dashboard
                  </div>
               </div>
            </div>
            <div class="mt-5 flex lg:mt-0 lg:ml-4">
            
               <a href="/admin/products/add" class="sm:ml-3">
                  <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <i class="ri-add-line -ml-1 mr-2 h-5 w-5"></i>
                  Thêm
                  </button>
               </a>

            </div>
         </div>

         <!-- Table content -->
         <div class="flex flex-col">
         <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
               <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
               <table class="min-w-full divide-y divide-gray-200">
                  <thead class="bg-gray-50">
                     <tr>
                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        STT</th>
                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Tên sản phẩm</th>
                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Đơn giá</th>
                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                       Số lượng</th>   
                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Hình ảnh</th>
                     <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Mô tả</th>   
                     <th scope="col" class="relative px-6 py-3">
                        <span class="sr-only">Edit</span>
                     </th>
                     </tr>
                  </thead>
                  <tbody class="bg-white divide-y divide-gray-200">
                     ${data.data.map((product, index) => `\
                           <tr>
                           <td class="px-6 py-4 whitespace-nowrap">
                              <div class="flex items-center">
                                 <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-900">${index + 1}</div>
                                 </div>
                              </div>
                           </td>
                           <td class="px-6 py-4 whitespace-nowrap">
                              <div class="text-sm text-gray-900">${product.name}</div>
                           </td>
                           <td class="px-6 py-4 whitespace-nowrap">
                              <span>${product.price}</span>
                           </td>
                           <td class="px-6 py-4 whitespace-nowrap">
                              <span>${product.quantity}</span>
                           </td>
                           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <div class="flex-shrink-0 h-10 w-10">
                                 <img class="h-10 w-10 rounded-full"
                                    src="${product.image}"
                                    alt="">
                              </div>
                           </td>
                           <td class="px-6 py-4 whitespace-nowrap">
                              <span>${product.desc}</span>
                           </td>
                           <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <a href="/admin/products/${product.id}/edit" class="text-indigo-600 hover:text-indigo-900 px-2">Sửa</a>
                              <button data-id="${product.id}" class="btn-remove text-indigo-600 hover:text-indigo-900">Xóa</button>    
                           </td>
                        </tr>                            
                     `).join("")}
                  </tbody>
               </table>
               </div>
            </div>
            <div class="flex gap-2">
            </div>
         </div>
         </div>

        `;
    },
    afterRender() {
        const btnRemove = document.querySelectorAll(".btn-remove");
        btnRemove.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                console.log(btn);
                const confirm = window.confirm("bạn có muốn xóa không ?");
                if (confirm) {
                    remove(id)
                        .then(() => toastr.success("bạn đã xóa thành công !"))
                        .then(() => reRender(AdminProducts, "#app"));
                }
            });
        });
    },
};

export default AdminProducts;