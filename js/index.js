import { productSpecificPage } from "/js/pages/product.js";
import { productsPage } from "/js/pages/products.js";
import { home } from "/js/pages/home.js";

if (location.pathname === "/shop.html") {
    productsPage()
}


if (location.pathname === "/specific-product.html") { 
    productSpecificPage()
}

if (location.pathname === "/index.html") { 
    home()
}