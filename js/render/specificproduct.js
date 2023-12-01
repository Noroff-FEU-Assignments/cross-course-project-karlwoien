export function renderSpecificProduct (productData) {
    const productElement = document.createElement ("div");
    productElement.classList.add("product-row")

    const img = document.createElement ("img");
    img.src = productData.image;
    img.alt = productData.title;
    img.classList.add("product-row", "img")

    const productTitle = document.createElement("h1");
    productTitle.innerText = productData.title;
    productTitle.classList.add("product-information")

    const productPrice = document.createElement("h3");
    productPrice.innerText = "$ " + productData.price;

    const productDescription = document.createElement ("p");
    productDescription.innerHTML = productData.description;

    const textHr = document.createElement("hr");

    const productSizeContainer = document.createElement("div");
    productSizeContainer.classList.add("product-size");
    
    const productSizeLeft = document.createElement ("div");
    productSizeLeft.classList.add("product-size-left");

    const productSizeRight = document.createElement ("div");
    productSizeRight.classList.add("product-size-right");

    const sizeText = document.createElement("p")
    sizeText.innerHTML = "Size: ";

    let productSize = document.createElement("p")
    productSize.innerHTML = productData.sizes;
    productSize.classList.add("product-size-selection", "product-size-selection:hover")

    const addToBag = document.createElement("a");
    addToBag.innerText = "add to bag";
    addToBag.classList.add("btn--red");
    addToBag.href = "/checkout.html";

    const continueShopping = document.createElement("a");
    continueShopping.innerText = "continue shopping";
    continueShopping.classList.add("btn--white");
    continueShopping.href = "/shop"

    productSizeRight.append (addToBag)
    productSizeLeft.append(sizeText, productSize)
    productSizeContainer.append(productSizeLeft, productSizeRight)

    productTitle.append(productPrice, productDescription, textHr, productSizeContainer, continueShopping);

    productElement.append(img, productTitle);

    document.querySelector(".specific-product").append(productElement);
}