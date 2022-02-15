import Banner from "../components/banner";
import Content from "../components/content";
import Footer from "../components/footer";
import Header from "../components/header";

const Homepage = {
    render() {
        return /* html */ `
            <div class="w-1300">
                <div class="w-980 mx-auto">
                    ${Header.render()}
                    ${Banner.render()}
                    ${Content.render()}
                    ${Footer.render()}
                </div>
            </div> 
        `;
    },
};

export default Homepage;