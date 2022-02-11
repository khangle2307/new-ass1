import Navigo from "navigo";
import Homepage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, id) => {
    document.querySelector("#app").innerHTML = content.render(id);
};

router.on({
    "/": () => {
        print(Homepage);
    },
    "/about": () => {
        print(Homepage);
    },
});

router.resolve();

router.notFound(() => print("not Found page"));