import toastr from "toastr";
import { add } from "../../../api/category";
import AdminNav from "../../../components/AdminNav";

const AdminAddCategory = {
    render() {
        return /* html */ `
        <div class="min-h-full">
        ${AdminNav.render()}

        <header class="bg-white shadow">
          <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <!-- This example requires Tailwind CSS v2.0+ -->
              <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                  <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                    Thêm mới bài viết
                  </h2>
                </div>
                <div class="mt-5 flex lg:mt-0 lg:ml-4">
                  <a href="/admin/categorys" class="sm:ml-3">
                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <svg xmlns="http://www.w3.org/2000/svg" class="-ml-1 mr-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                      Quay lại
                    </button>
                  </a>
                </div>
              </div>
      
          </div>
        </header>
        <main>
        <div>
        <div class="md:grid md:grid-cols-3 md:gap-6">
          
          <div class="mt-5 md:mt-0 md:col-span-2">
            <form id="form-add">
              <div class="shadow sm:rounded-md sm:overflow-hidden">
                <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div class="grid grid-cols-3 gap-6">
                    <div class="col-span-3 sm:col-span-2">
                      <label for="company-website" class="block text-sm font-medium text-gray-700"> Tên danh mục</label>
                      <div class="mt-1 flex rounded-md shadow-sm">
                        <input type="text" name="company-website" id="category-name" class="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300" >
                      </div>
                    </div>
                  <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                     <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Thêm</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
        </main>
      </div>
        
        `;
    },
    afterRender() {
        const formAdd = document.querySelector("#form-add");

        formAdd.addEventListener("submit", (a) => {
            a.preventDefault();
            add({
                name: document.querySelector("#category-name").value,
            });

            toastr.success("thêm thành công");
        });
    },
};
export default AdminAddCategory;