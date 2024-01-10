import { getProducts } from "../api/products.js";
import { renderProductsWomen } from "../render/productsWomen.js";
import { loader } from "../constants.js";

export function shopWomen() {
    let products;
    let productData = [];

    async function getWomenJackets () {
        try{
            products = await getProducts();
            for (let i = 0; i < products.length; i++) {
                if (products[i].attributes[0].terms[0].name === "Female") {
                    productData.push(products[i]);
                }
            const womenProducts = document.querySelector(".shop-grid-products");
            womenProducts.innerHTML = renderProductsWomen(productData);
            }
    } catch (error) {
    alert (error);
  }
}
getWomenJackets()
loader.classList.remove ("loader");
}