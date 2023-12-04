import { home } from "/js/pages/home.js";
import { specificProduct } from "./pages/specificProduct.js";
import { shopProducts } from "./pages/products.js";
import { shopMen } from "./pages/productsMen.js";
import { shopWomen } from "./pages/productsWomen.js";

if (location.pathname === "/shop") {
    shopProducts()
}

if (location.pathname === "/product") { 
    specificProduct()
}

if (location.pathname === "/") { 
    home()
}

if (location.pathname === "/men") { 
    shopMen()
}

if (location.pathname === "/women") { 
    shopWomen()
}