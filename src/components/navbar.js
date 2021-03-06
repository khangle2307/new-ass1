import Cart from "./cart";

const Navbar = {
    render() {
        return /* html */`
     <div class="flex justify-around items-center py-3">
        <a href="/" class="text-lg text-white uppercase font-semibold px-5">Shopbye</a>         
        <ul class="flex">
           <li><a href="/cateProduct" class="text-white px-2">Điện thoại</a></li>
           <li><a href="/laptop" class="text-white px-2">Laptop,pc,máy tính</a></li>
           <li><a href="/phukien" class="text-white px-2">Phụ kiện</a></li>
           <li><a href="/news" class="text-white px-2">Tin tức</a></li>
        </ul>   
        <div class="flex my-1 mx-4">
           ${Cart.render()}
        </div>   
     </div>
    `;
    },
};

export default Navbar;