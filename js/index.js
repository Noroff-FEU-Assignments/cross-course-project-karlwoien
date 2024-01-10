import { home } from "/js/pages/home.js";
import { specificProduct } from "./pages/specificProduct.js";
import { shopProducts } from "./pages/products.js";
import { shopMen } from "./pages/productsMen.js";
import { shopWomen } from "./pages/productsWomen.js";
import { renderModal } from "./components/messageBox.js";

if (location.pathname === "/shop.html") {
    shopProducts();
}

if (location.pathname === "/product") { 
    specificProduct();
}

if (location.pathname === "/index.html") { 
    home();
}

if (location.pathname === "/men.html") { 
    shopMen();
}

if (location.pathname === "/women.html") { 
    shopWomen();
}

if (location.pathname === "/contact") {
    renderModal();
}