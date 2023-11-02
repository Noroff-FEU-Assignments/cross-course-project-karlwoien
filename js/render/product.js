export function renderProductSpecific (productData) {
    const productElement = document.createElement ("div");
    
    const img = document.createElement ("img");
    img.src = productData.image;
    img.alt = productData.title;
    productElement.append(img);

    //const productTitle = document.createElement("h3");
    //productTitle.innerText = productData.title;
    //productElement.append(productTitle);

    //const productPrice = document.createElement("p");
    //productPrice.innerText = "$ " + productData.price;
    //productElement.append(productPrice);
    
    document.querySelector(".product-row").append(productElement);
}

export function renderProductsSpecific (specificProduct) {
    specificProduct.forEach(renderProductSpecific)
}