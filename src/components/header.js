import Banner from "./banner";
import Navbar from "./navbar";

const Header = {
    render() {
        return /* html */`
         <div class="h-20 bg-blue-900">
            ${Navbar.render()}
            ${Banner.render()}
         </div>
       
      `;
    },
};

export default Header;