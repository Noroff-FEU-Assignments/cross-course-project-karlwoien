import { getProducts } from "../api/products.js";
import { renderNewArrivals } from "../render/home.js";
import { loader } from "../constants.js";
import { displayError } from "../components/errormessage.js";
import { renderModal } from "../components/messageBox.js";

export function home () {
    let products;
    let discoverNewArrivals = [];

    async function getNewArrivals () {

        try {
            products = await getProducts ();

            for (let i = 0; i < products.length; i++) {
                if (discoverNewArrivals.length < 3 && products[i].onSale === false) {
                    discoverNewArrivals.push(products[i]);
                }
        
            const newArrivals = document.querySelector(".discover-row")
            newArrivals.innerHTML = renderNewArrivals(discoverNewArrivals)
            }
        } catch (error) {
            const newArrivals = document.querySelector(".discover-row")
            newArrivals.innerHTML = displayError (`Due to a technical issue on our end we weren't abel to retrive the list of New Arrivals. Please try again. <br> If the issue keeps happening, please contact our <a href="/contact.html">Customer care.</a>`);
        }
    }
    getNewArrivals()
    loader.classList.remove("loader")
    renderModal ()
}