import { getProducts } from "../api/products.js";
import { renderProducts } from "../render/products.js";
import { loader } from "../constants.js";

export async function shopProducts() {
  try{
    const products = await getProducts();
    renderProducts(products);
    loader.classList.remove ("loader");
  }
  catch (error) {
    alert (error);
  }
  
}
