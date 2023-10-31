import { productSpecificPage } from "./product";
import { productsPage } from "./products";


if (location.pathname === "/shop/") { // oversikt alle jakker
// fetch products
// render products
productsPage()
}


if (location.pathname === "/specific-product/") { // spesifikt produkt
// get id from url
// fetch product
// render product
productSpecificPage()
}

if (location.pathname === "/home/") { //HJEMMESIDEN
    // get id from url
    // fetch product
    // render product
    }