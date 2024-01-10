export function renderNewArrivals (discoverNewArrivals) {

    let newArrivals = document.createElement ("div");
    newArrivals.classList.add ("discover-row");

    for (let i = 0; i < discoverNewArrivals.length; i++) {
        let product = document.createElement("div");

        let container = document.createElement("a");
        container.classList.add("discover-column");
        container.href = `/product?id=${discoverNewArrivals[i].id}`;

        let image = document.createElement("img");
        image.src = discoverNewArrivals[i].images[0].src;
        image.alt = discoverNewArrivals[i].name;

        let title = document.createElement("h3");
        title.innerHTML = discoverNewArrivals[i].name;

        let price = document.createElement("p");
        price.innerHTML = "$ " + discoverNewArrivals[i].prices.price/100;
        price.classList.add ("p-bold");

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