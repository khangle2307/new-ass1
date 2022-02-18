import { reRender } from "../utils/reRender";
import Navbar from "./navbar";

const Header = {
    render() {
        return /* html */`
         <div class="h-20 bg-blue-900 flex justify-center items-center" id="header">
            ${Navbar.render()}
            <a class="btn-blue" href="/signin">Đăng nhập</a>
            <div>
              <span id="account" class="text-white"></span>
              ${localStorage.getItem("user") ? "<button id=\"logout\" class='text-white'>Logout</button>" : ""}
            </div>  
         </div>
      `;
    },
    afterRender() {
        const account = document.querySelector("#account");
        const btnLogout = document.querySelector("#logout");

        account.innerHTML = JSON.parse(localStorage.getItem("user")).username;
        btnLogout.addEventListener("click", () => {
            localStorage.removeItem("user");
            alert("bạn đã đăng xuất thành công");
            reRender(Header, "#header");
        });
    },
};

export default Header;