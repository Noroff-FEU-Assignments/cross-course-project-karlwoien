export function renderNewArrivals (news) {

    //Create container
    let newArrivals = document.createElement ("div");
    newArrivals.classList.add ("discover-row");

    //discover new arrivals

    for (let i = 0; i < news.length; i++) {
        let product = document.createElement("div");

        let container = document.createElement("a");
        container.classList.add("discover-column");
        container.href = `/specific-product.html?id=${news[i].id}`;

        let image = document.createElement("img");
        image.src = news[i].image;
        image.alt = news[i].title;

        let title = document.createElement("h3");
        title.innerHTML = news[i].title;

        let price = document.createElement("p");
        price.innerHTML = "$ " + news[i].price;

        const button = document.createElement ("button");
        button.innerText = "shop now";
        button.classList.add ("btn--red")
        newArrivals.append(button);

        
        container.append(image, title, price, button)        
    
        product.append(container)

        newArrivals.append(product)
    }
    
    return newArrivals.innerHTML;
}