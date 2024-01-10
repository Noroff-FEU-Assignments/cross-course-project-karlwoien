export function renderProduct (productData) {
    const productElement = document.createElement ("a");
    productElement.href = "/product?id=" + productData.id;
    
    const img = document.createElement ("img");
    img.src = productData.images[0].src;
    img.alt = productData.name;
    productElement.append(img);

    const productTitle = document.createElement("h3");
    productTitle.innerText = productData.name;
    productElement.append(productTitle);

    const productPrice = document.createElement("p");
    productPrice.innerText = "$ " + productData.prices.price/100;
    productElement.append(productPrice);
    
    document.querySelector(".shop-grid-products").append(productElement);
}

export function renderProducts (listOfProducts) {
    listOfProducts.forEach(renderProduct)
}