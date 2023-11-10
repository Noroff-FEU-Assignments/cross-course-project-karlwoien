import { loader } from "../constants.js";

export function renderProduct (productData) {
    const productElement = document.createElement ("a");
    productElement.href = "/specific-product.html?id=" + productData.id;
    
    const img = document.createElement ("img");
    img.src = productData.image;
    img.alt = productData.title;
    productElement.append(img);

    const productTitle = document.createElement("h3");
    productTitle.innerText = productData.title;
    productElement.append(productTitle);

    const productPrice = document.createElement("p");
    productPrice.innerText = "$ " + productData.price;
    productElement.append(productPrice);

    loader.classList.remove("loader");
    
    document.querySelector(".shop-grid-products").append(productElement);
}

export function renderProducts (listOfProducts) {
    listOfProducts.forEach(renderProduct)
}