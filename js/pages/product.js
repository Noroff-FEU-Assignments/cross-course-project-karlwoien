import { getProduct } from "../api/products.js";
import { renderProductSpecific } from "../render/product.js";

export async function productSpecificPage() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const product = await getProduct(id);
  renderProductSpecific(product);
}
