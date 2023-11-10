import { getProducts } from "../api/products.js";
import { renderNewArrivals } from "../render/home.js";
import { loader } from "../constants.js";

export function home () {
    // fetch products for discover new arrivals
    let products;
    let discoverNewArrivals = [];

    async function getNewArrivals () {

        products = await getProducts ();

        for (let i = 0; i < products.length; i++) {
            if (discoverNewArrivals.length < 3 && products[i].onSale === false) {
                discoverNewArrivals.push(products[i]);
            }
        }

        // Create discover new arrivals

        const newArrivals = document.querySelector(".discover-row")
        newArrivals.innerHTML = renderNewArrivals(discoverNewArrivals)
        
    }
    getNewArrivals()
    loader.classList.remove("loader")
}