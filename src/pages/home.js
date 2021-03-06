import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Products from "../components/products";

const Homepage = {
    async render() {
        return /* html */ `
            <div class="w-1300">
                <div class="w-980 mx-auto">
                    ${Header.render()}
                    ${Banner.render()}
                    ${await Products.render()}
                    ${Footer.render()}
                </div>
            </div> 
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};

export default Homepage;