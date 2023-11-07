export function renderProductSpecific (productData) {
    const productElement = document.createElement ("div");

    const img = document.createElement ("img");
    img.src = productData.image;
    img.alt = productData.title;
    img.classList.add ("large-view");
    productElement.append(img);


    const productTitle = document.createElement("h3");
    productTitle.innerText = productData.title;
    productTitle.style.fontSize = "48px";
    productElement.append(productTitle);

    const productPrice = document.createElement("h3");
    productPrice.innerText = "$ " + productData.price;
    productElement.append(productPrice);

    const productDescription = document.createElement ("p")
    productDescription.innerHTML = productData.description;
    productDescription.classList.add("product-information")
    productElement.append(productDescription)

    const textHr = document.createElement("hr")
    //textHr.classList.add("product-information")
    productElement.append(textHr);

    const productSize = document.createElement("p")
    productSize.innerHTML = "Size: " + productData.sizes;
    productSize.classList.add("product-size")
    productElement.append(productSize);
    
    document.querySelector(".product-row").append(productElement);
}

export function renderProductsSpecific (specificProduct) {
    specificProduct.forEach(renderProductSpecific)
}