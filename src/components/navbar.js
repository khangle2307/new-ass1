import Searchbar from "./searchbar";

const Navbar = {
    render() {
        return /* html */`
     <div class="flex justify-center items-center py-3">
        <a href="/" class="text-lg text-white uppercase font-semibold px-5">Shopbye</a>         
        <ul class="flex">
           <li><a href="#" class="text-white px-2">Trang chủ</a></li>
           <li><a href="#" class="text-white px-2">Điện thoại</a></li>
           <li><a href="#" class="text-white px-2">Laptop,pc,máy tính</a></li>
           <li><a href="#" class="text-white px-2">Phụ kiện</a></li>
        </ul>   
        <div class="flex my-1">
            ${Searchbar.render}
           <button class="btn-blue">Đăng nhập</button>
        </div>   
     </div>
    `;
    },
};

export default Navbar;