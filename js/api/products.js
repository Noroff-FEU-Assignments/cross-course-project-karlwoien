import { apiUrl } from "/js/constants.js";

export async function getProducts () {
    const response = await fetch(apiUrl);
    const products = await response.json();
    if (!response.ok) {
        throw new Error("Due to a technical issue on our end we weren't abel to retrive the list of products. If the issue keeps happening, please contact our customer care")
    }
    return products;
}

export async function getProduct (id) {
    const response = await fetch(apiUrl + id);
    const product = await response.json();
    if (!response.ok) {
        throw new Error("Unable to access product with the id: " + id)
    }
    return product;
}