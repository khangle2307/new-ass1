import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNews from "./pages/admin/news";
import AdminProductsPage from "./pages/admin/products";
import AdminAddProduct from "./pages/admin/products/add";
import usersAdmin from "./pages/admin/users";
import Homepage from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => {
        print(Homepage);
    },
    "/signup": () => {
        print(Signup);
    },
    "/signin": () => {
        print(Signin);
    },
    "/admin/dashboard": () => {
        print(Dashboard);
    },
    "/admin/products": () => {
        print(AdminProductsPage);
    },
    "/admin/products/add": () => {
        print(AdminAddProduct);
    },
    "/admin/news": () => {
        print(AdminNews);
    },
    "/admin/users": () => {
        print(usersAdmin);
    },
    "/admin/statistics": () => {
        print(Dashboard);
    },
});

router.resolve();

router.notFound(() => print("not Found page"));