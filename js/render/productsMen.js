export function renderProductsMen (productData) {

    let menProducts = document.createElement ("a");
    menProducts.classList.add = (".shop-grid-products");

    for (let id = 0; id < productData.length; id++) {
       let product = document.createElement ("a");
       product.href = "/product?id=" + productData.id;
        
        let img = document.createElement ("img");
        img.src = productData.image;
        img.alt = productData.title;
        product.append(img);
    
        let productTitle = document.createElement("h3");
        productTitle.innerText = productData.title;
        product.append(productTitle);
    
        let productPrice = document.createElement("p");
        productPrice.innerText = "$ " + productData.price;
        product.append(productPrice);
        
       // document.querySelector(".shop-grid-products").append(productsMen);
    }  
    return menProducts.innerHTML;
 }

//export function renderProductsMen (listOfProducts) {
//    listOfProducts.forEach(renderProductMen)
//}