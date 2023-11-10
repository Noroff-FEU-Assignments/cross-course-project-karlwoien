import { apiUrl } from "/js/constants.js";

export async function getProducts () {
    const response = await fetch(apiUrl);
    const products = await response.json();
    if (!response.ok) {
        throw new Error("Unable to access list of products. Please try again later.")
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