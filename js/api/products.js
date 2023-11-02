import { apiUrl } from "/js/constants.js";

export async function getProducts () {
    const response = await fetch(apiUrl);
    const products = await response.json();
    return products;
}

export async function getProduct (id) {
    const response = await fetch(apiUrl + id);
    const product = await response.json();
    return product;
}