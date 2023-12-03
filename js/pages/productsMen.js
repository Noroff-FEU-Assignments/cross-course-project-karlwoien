import { getProducts } from "../api/products.js";
import { renderProductsMen } from "../render/productsMen.js";
import { loader } from "../constants.js";

export function shopMen() {
    let products;
    let productData = [];

    async function getMensJackets () {

        try{
            products = await getProducts();
            for (let i = 0; i < products.length; i++) {
                if (productData.length < products[i].gender === "Male") {
                    productData.push(products[i]);
                }
            const menProducts = document.querySelector (".shop-grid-products");
            menProducts.innerHTML = renderProductsMen(productData);
            }
    } catch (error) {
    alert (error);
  }
}
getMensJackets()
loader.classList.remove ("loader");
}