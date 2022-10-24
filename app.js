const button = document.querySelector(".toggle-btn");
const Header = document.querySelector(".main-header");
const over = document.querySelector(".overlay")
button.addEventListener("click", function () {
    Header.classList.toggle('open');
    over.classList.toggle("open");
    button.classList.toggle('open');
})
