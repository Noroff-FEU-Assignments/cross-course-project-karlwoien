import { home } from "/js/pages/home.js";
import { specificProduct } from "./pages/specificproduct.js";
import { shopProducts } from "./pages/products.js";
import { shopMen } from "./pages/productsMen.js";

if (location.pathname === "/shop.html") {
    shopProducts()
}

if (location.pathname === "/product") { 
    specificProduct()
}

if (location.pathname === "/") { 
    home()
}

if (location.pathname === "/men.html") { 
    shopMen()
}