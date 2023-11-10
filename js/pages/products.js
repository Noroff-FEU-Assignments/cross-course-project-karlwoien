import { getProducts } from "../api/products.js";
import { renderProducts } from "../render/products.js";
import { loader } from "../constants.js";

export async function productsPage() {
  try{
    loader.classList.remove ("loader");
    const products = await getProducts();
    renderProducts(products);
  }
  catch (error) {
    alert (error);
  }
  
}
