import Header from "../components/header";

const Homepage = {
    render() {
        return /* html */ `
        <div class="w-1300">
            <div class="w-980 mx-auto">
                ${Header.render()}
                <h1>hello wold</h1>
            </div>
        </div> 
       `;
    },
};

export default Homepage;