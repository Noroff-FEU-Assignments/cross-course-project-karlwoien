/* Inspired by: https://medium.com/@nerdplusdog/a-how-to-guide-for-modal-boxes-with-javascript-html-and-css-6a49d063987e*/

/* Function for Modal/Dialog Box that will open/close when user click a submit button */

export function renderModal() {

const modal = document.querySelector(".modal");

const modalButton = document.getElementById("modal-btn");

const closeButton = document.querySelector(".close-modal-btn");

modalButton.onclick = function () {
    modal.style.display = "block";
}

closeButton.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
}
}