import { productSpecificPage } from "/js/pages/product.js";
import { productsPage } from "/js/pages/products.js";
import { newArrivals } from "/js/pages/newArrivals.js";

if (location.pathname === "/shop.html") { 
// oversikt alle jakker
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