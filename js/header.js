let burger = document.querySelector(".burger");
let links = document.querySelector(".left-list");

burger.addEventListener("click", function () {
    burger.classList.toggle("active");
    links.classList.toggle("active");
    document.body.classList.toggle("burger");
});
