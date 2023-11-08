import { getProducts } from "../api/products.js";
import { renderNewArrivals } from "../render/home.js";

export function home () {
    // fetch products for discover new arrivals
    let products;
    let news = [];

    async function getNewArrivals () {

        products = await getProducts ();

        for (let i = 0; i < products.length; i++) {
            if (news.length < 3 && products[i].onSale === false) {
                news.push(products[i]);
            }
        }

        // Create discover new arrivals

        const newArrivals = document.querySelector(".discover-row")
        newArrivals.innerHTML = renderNewArrivals(news)
        
    }

    getNewArrivals()
}