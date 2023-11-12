import { home } from "/js/pages/home.js";
import { specificProduct } from "./pages/specificproduct.js";
import { shopProducts } from "./pages/products.js";

if (location.pathname === "/shop") {
    shopProducts()
}

if (location.pathname === "/product") { 
    specificProduct()
}

if (location.pathname === "/") { 
    home()
}