import { getProduct } from "../api/products.js";
//import { renderProduct } from "../render/post.js";
import { renderProductSpecific } from "../render/product.js";

export async function productSpecificPage() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const product = await getProduct(id);
  renderProductSpecific(product);

  //fetch the product data by id
  // render the product data
}
