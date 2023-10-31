const host = "https://api.noroff.dev/api/v1";
const endpoint = "/rainy-days";
const apiUrl = host + endpoint;


export async function getProducts () {
    const response = await fetch(apiUrl);
    const products = await response.json();
    return products;
}

export function renderProduct (productData) {
    const productElement = document.createElement ("a");
    productElement.href = "/specific-product.html";
    
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
    
    document.querySelector(".shop-grid-products").append(productElement);
}

export function renderProducts (listOfProducts) {
    listOfProducts.forEach(renderProduct)
}

export async function productsPage() {
    const products = await getProducts();
    //console.log(products)
    renderProducts(products);
}