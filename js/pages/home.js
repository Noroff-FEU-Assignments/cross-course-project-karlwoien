import { getProducts } from "../api/products.js";
import { renderNewArrivals } from "../render/home.js";
import { loader } from "../constants.js";
import { displayError } from "../components/errorMessage.js";

export function home () {
    // fetch products for discover new arrivals
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
            newArrivals.innerHTML = displayError ("Error! " + "Unable to access New Arrivals. Please try again later.");
        }
        
    }
    getNewArrivals()
    loader.classList.remove("loader")
}