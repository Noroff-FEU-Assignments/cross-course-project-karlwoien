export function renderNewArrivals (discoverNewArrivals) {

    let newArrivals = document.createElement ("div");
    newArrivals.classList.add ("discover-row");

    for (let i = 0; i < discoverNewArrivals.length; i++) {
        let product = document.createElement("div");

        let container = document.createElement("a");
        container.classList.add("discover-column");
        container.href = `/specific-product.html?id=${discoverNewArrivals[i].id}`;

        let image = document.createElement("img");
        image.src = discoverNewArrivals[i].image;
        image.alt = discoverNewArrivals[i].title;

        let title = document.createElement("h3");
        title.innerHTML = discoverNewArrivals[i].title;

        let price = document.createElement("p");
        price.innerHTML = "$ " + discoverNewArrivals[i].price;

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