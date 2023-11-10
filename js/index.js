import { home } from "/js/pages/home.js";
import { specificProduct } from "./pages/specific-product.js";
import { shopProducts } from "./pages/products.js";

if (location.pathname === "/shop.html") {
    shopProducts()
}


if (location.pathname === "/specific-product.html") { 
    specificProduct()
}

if (location.pathname === "/index.html") { 
    home()
}