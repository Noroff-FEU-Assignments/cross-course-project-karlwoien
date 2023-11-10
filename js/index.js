import { productsPage } from "/js/pages/products.js";
import { home } from "/js/pages/home.js";
import { specificProduct } from "./pages/specific-product.js";

if (location.pathname === "/shop.html") {
    productsPage()
}


if (location.pathname === "/specific-product.html") { 
    specificProduct()
}

if (location.pathname === "/index.html") { 
    home()
}