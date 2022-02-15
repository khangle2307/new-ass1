import Navigo from "navigo";
import Dashboard from "./pages/admin/dashboard";
import AdminProductsPage from "./pages/admin/products";
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
    "/admin/articles": () => {
        print(Dashboard);
    },
    "/admin/users": () => {
        print(Dashboard);
    },
    "/admin/statistics": () => {
        print(Dashboard);
    },
});

router.resolve();

router.notFound(() => print("not Found page"));