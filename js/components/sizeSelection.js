export function sizeSelection () {
    const sizes = document.querySelectorAll (`[aria-label="Sizes] .product-size-selection`);

    sizes.forEach ((size) => {
        size.addEventListener ("click", function(){
            sizes.forEach ((otherSize) => {
                otherSize.classList.remove ("product-size-selection-active");
            });
            this.classList.add ("product-size-selection-active");
        })
    })
}