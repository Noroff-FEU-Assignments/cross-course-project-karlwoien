import { home } from "/js/pages/home.js";
import { specificProduct } from "./pages/specific-product.js";
import { shopProducts } from "./pages/products.js";

if (location.pathname === "/shop") {
    shopProducts()
}

if (location.pathname === "/specific-product") { 
    specificProduct()
}

if (location.pathname === "/") { 
    home()
}