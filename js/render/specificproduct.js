export function renderSpecificProduct (productData) {
    const productElement = document.createElement ("div");
    productElement.classList.add("product-row")

    const img = document.createElement ("img");
    img.src = productData.images[0].src;
    img.alt = productData.name;
    img.classList.add("large-view-picture")

    const productTitle = document.createElement("h1");
    productTitle.innerText = productData.name;
    productTitle.classList.add("product-information")

    const productPrice = document.createElement("h3");
    productPrice.innerText = "$ " + productData.prices.price/100;

    const productDescription = document.createElement ("p");
    productDescription.innerHTML = productData.description;

    const productDetails = document.createElement("p");
    productDetails.innerHTML = "Details:";
    productDetails.classList.add("p-bold")

    const productBullets = document.createElement ("ul");
    productBullets.innerHTML = `<li>Waterproof</li>
                                <li>Highly breathable</li>
                                <li>100% Polyester</li>`;
    productBullets.classList.add("product-information");

    const textHr = document.createElement("hr");

    const productSizeContainer = document.createElement("div");
    productSizeContainer.classList.add("product-size");
    
    const productSizeLeft = document.createElement ("div");
    productSizeLeft.classList.add("product-size-left");

    const productSizeRight = document.createElement ("div");
    productSizeRight.classList.add("product-size-right");

    const sizeText = document.createElement("p");
    sizeText.innerHTML = "Size: ";
   
    const productSizes = document.createElement ("div");
    productSizes.classList.add("product-size-left");
    productSizes.ariaLabel = "Sizes";

    for (let i = 0; i < productData.attributes[1].terms.name.length; i++) {
        const productSize = document.createElement("div")
        productSize.innerHTML = productData.attributes[1].terms.name[i];
        productSize.classList.add("product-size-selection", "product-size-selection:hover")
        productSizes.appendChild(productSize);
    }

    const addToBag = document.createElement("a");
    addToBag.innerHTML = "add to bag";
    addToBag.classList.add("btn--red");
    addToBag.href = "/checkout.html";

    const continueShopping = document.createElement("a");
    continueShopping.innerHTML = "continue shopping";
    continueShopping.classList.add("btn--white");
    continueShopping.href = "/shop"

    productSizeRight.append (addToBag)
    productSizeLeft.append(sizeText, productSizes)
    productSizeContainer.append(productSizeLeft, productSizeRight)

    productTitle.append(productPrice, productDescription,productDetails, productBullets, textHr, productSizeContainer, continueShopping);

    productElement.append(img, productTitle);

    document.querySelector(".specific-product").append(productElement);
}