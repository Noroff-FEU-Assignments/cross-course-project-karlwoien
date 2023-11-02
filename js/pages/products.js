import { getProducts } from "../api/products.js";
import { renderProducts } from "../render/products.js";

export async function productsPage() {
  const products = await getProducts();
  renderProducts(products);
}
