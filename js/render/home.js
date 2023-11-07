export function renderNewArrivals(productData) {
    const newArrivals = document.createElement("a");
    newArrivals.href = "/specific-product.html?id=" + productData.id;
    
    const img = document.createElement ("img");
    img.src = productData.image;
    img.alt = productData.title;
    img.style.height = "500px";
    newArrivals.append(img);

    const productTitle = document.createElement("h3");
    productTitle.innerText = productData.title;
    newArrivals.append(productTitle);

    const productPrice = document.createElement("p");
    productPrice.innerText = "$ " + productData.price;
    newArrivals.append(productPrice);

    const btn = document.createElement("button");
    btn.innerText = "shop now"
    btn.classList.add("btn--red");
    newArrivals.append(btn)

    document.querySelector(".discover-row").append(newArrivals);

}

export function renderNews (newArrivals) {
    newArrivals.forEach(renderNewArrivals);
}

