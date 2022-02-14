import Banner from "../components/banner";
import Content from "../components/content";
import Header from "../components/header";

const Homepage = {
    render() {
        return /* html */ `
        <div class="w-1300">
            <div class="w-980 mx-auto">
                ${Header.render()}
                ${Banner.render()}
                ${Content.render()}
            </div>
        </div> 
       `;
    },
};

export default Homepage;