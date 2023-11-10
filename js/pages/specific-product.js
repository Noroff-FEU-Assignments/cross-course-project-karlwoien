import { getProduct } from "../api/products.js";
import { renderSpecificProduct } from "../render/specific-product.js";
import { loader } from "../constants.js";

export async function specificProduct() {
  try {
    loader.classList.remove("loader");
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const product = await getProduct(id);
    renderSpecificProduct(product);
  }
  catch (error) {
    alert(error);
  }
}
