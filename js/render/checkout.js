/* started on rendring checkout - must be updated and finished. Checkout still static now.

function renderCheckoutSummary (cart) {

    let checkoutSummary = document.createElement ("div");
    checkoutSummary.classList.add ("");

    for (let i = 0; i < cart.length; i++) {
        let header = document.createElement("h1");
        header.innerHTML = "Checkout summary"

        let summaryGrid = document.createElement("div")
        summaryGrid.classList.add("summary-grid")

        let productHeader = document.createElement("p")
        productHeader.innerHTML = "Product"
        productHeader.classList.add("summary-grid-left")

        let productHeaderSize = document.createElement("p")
        productHeaderSize.innerHTML = "Size"
        productHeaderSize.classList.add("summary-grid-right")

        let productHeaderItems = document.createElement("p")
        productHeaderItems.innerHTML = "Size"
        productHeaderItems.classList.add("summary-grid-right")

        let productHeaderPrice = document.createElement("p")
        productHeaderPrice.innerHTML = "Price"
        productHeaderPrice.classList.add("summary-grid-right")

        let productHeaderCurrency = document.createElement("p")
        productHeaderCurrency.innerHTML = "Currency"
        productHeaderCurrency.classList.add("summary-grid-right")

    }
    return newArrivals.innerHTML;
}*/