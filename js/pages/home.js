import { getProducts } from "../api/products.js";
import { renderNews } from "../render/home.js";

export async function home() {
    const products = await getProducts();
    renderNews(products);
}