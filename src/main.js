import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminNews from "./pages/admin/news";
import AdminProductsPage from "./pages/admin/products";
import AdminAddProduct from "./pages/admin/products/add";
import usersAdmin from "./pages/admin/users";
import DetailProductPage from "./pages/product/detail";
import Homepage from "./pages/home";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import CartPage from "./pages/cart";
import AdminUpdateProduct from "./pages/admin/products/edit";
import AdminCategorys from "./pages/admin/categorys";
import AdminAddCategory from "./pages/admin/categorys/add";
import AdminUpdateCategory from "./pages/admin/categorys/edit";
import CateProduct from "./pages/cateProduct";

const router = new Navigo("/", { linksSelector: "a", hash: "true" });

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
    "/product/:id": ({ data }) => print(DetailProductPage, data.id),
    "/cateProduct": () => {
        print(CateProduct);
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
    "/admin/products/:id/edit/": ({ data }) => print(AdminUpdateProduct, data.id),
    "/admin/news": () => {
        print(AdminNews);
    },
    "/admin/categorys": () => {
        print(AdminCategorys);
    },
    "/admin/categorys/add": () => {
        print(AdminAddCategory);
    },
    "/admin/categorys/:id/edit": ({ data }) => print(AdminUpdateCategory, data.id),
    "/admin/users": () => {
        print(usersAdmin);
    },
    "/admin/statistics": () => {
        print(Dashboard);
    },
    "/cart": () => {
        print(CartPage);
    },
});

router.resolve();

router.notFound(() => print("not Found page"));