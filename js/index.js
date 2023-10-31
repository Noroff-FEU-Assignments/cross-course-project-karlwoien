import { productSpecificPage } from "./product.js";
import { productsPage } from "./products.js";
import { newArrivals } from "./newArrivals.js";

if (location.pathname === "/shop.html") { 
// oversikt alle jakker
// fetch products
// render products
    productsPage()
}


if (location.pathname === "/specific-product.html") { 
// spesifikt produkt
// get id from url
// fetch product
// render product
    productSpecificPage()
}

if (location.pathname === "/index.html") { 
    //HJEMMESIDEN
    // get id from url
    // fetch product
    // render product
    newArrivals()
}