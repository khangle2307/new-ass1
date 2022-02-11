import Navigo from "navigo";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content, id) => {
    document.querySelector("#app").innerHTML = content.render(id);
};

router.on({
    "/": () => {
    },
    "/about": () => {
    },
});

router.resolve();

router.notFound(() => print("not Found page"));