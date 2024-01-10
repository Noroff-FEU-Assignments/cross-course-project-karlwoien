export function renderProductsMen (productData) {

    let productsMen = document.createElement ("article");
    productsMen.classList.add = (".shop-grid-products");
    

    for (let i = 0; i < productData.length; i++) {
       let product = document.createElement ("a");
       product.href = `/product?id=${productData[i].id}`;
        
        let image = document.createElement ("img");
        image.src = productData[i].images[0].src;
        image.alt = productData[i].name;
        
    
        let productTitle = document.createElement("h3");
        productTitle.innerHTML = productData[i].name;
        
    
        let productPrice = document.createElement("p");
        productPrice.innerHTML = "$ " + productData[i].prices.price/100;
        productPrice.classList.add = (".p-bold");
        
        
       product.append (image, productTitle, productPrice);

       productsMen.append (product);
    }  
    return productsMen.innerHTML;
 }
