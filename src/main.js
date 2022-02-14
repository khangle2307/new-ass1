import Navigo from "navigo";
import Homepage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, id) => {
    document.querySelector("#app").innerHTML = content.render(id);
    if (content.afterRender) content.afterRender(id);
};

router.on({
    "/": () => {
        print(Homepage);
    },
    "/about": () => {
    },
});

router.resolve();

router.notFound(() => print("not Found page"));