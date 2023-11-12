import { getProduct } from "../api/products.js";
import { renderSpecificProduct } from "../render/specific-product.js";
import { loader } from "../constants.js";
import { changeTitle } from "../components/changeTitle.js";

let product;

export async function specificProduct() {
  try {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");

    const product = await getProduct(id);
    renderSpecificProduct(product);
    changeTitle (
      `${product.title
        .replace ("Rainy Days ", "")
        .replace ("Product", "")} | Rainy Days`
    );
    loader.classList.remove("loader");
  }
  catch (error) {
    alert(error);
  }
}
