export function renderProductsWomen (productData) {

    let productsWomen = document.createElement ("article");
    productsWomen.classList.add = (".shop-grid-products");
    

    for (let i = 0; i < productData.length; i++) {
       let product = document.createElement ("a");
       product.href = `/product?id=${productData[i].id}`;
        
        let image = document.createElement ("img");
        image.src = productData[i].image;
        image.alt = productData[i].title;
        
    
        let productTitle = document.createElement("h3");
        productTitle.innerHTML = productData[i].title;
        
    
        let productPrice = document.createElement("p");
        productPrice.innerHTML = "$ " + productData[i].price;
        productPrice.classList.add = (".p-bold");
        
        
       product.append (image, productTitle, productPrice);

       productsWomen.append (product);
    }  
    return productsWomen.innerHTML;
 }
