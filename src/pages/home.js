import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import Products from "../components/products";

const Homepage = {
    render() {
        return /* html */ `
            <div class="w-1300">
                <div class="w-980 mx-auto">
                    ${Header.render()}
                    ${Banner.render()}
                    ${Products.render()}
                    ${Footer.render()}
                </div>
            </div> 
        `;
    },
};

export default Homepage;