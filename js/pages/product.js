import { getProduct } from "../api/products.js";
import { renderProductSpecific } from "../render/product.js";
import { loader } from "../constants.js";

export async function productSpecificPage() {
  try {
    loader.classList.remove("loader");
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const product = await getProduct(id);
    renderProductSpecific(product);
  }
  catch (error) {
    alert(error);
  }
}
