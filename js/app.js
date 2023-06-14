const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector("#btn-search");

const cart = document.querySelector(".cart");
const cartBtn = document.querySelector("#btn-cart");

const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#btn-menu");

const navbarList = document.querySelector(".navbar-list");

searchBtn.addEventListener("click", () => {
    searchForm.classList.toggle("active");
});

cartBtn.addEventListener("click", () => {
    cart.classList.toggle("active");
});

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

document.addEventListener("click", (e) => {
    if (!e.composedPath().includes(searchBtn) &&
        !e.composedPath().includes(searchForm))
        searchForm.classList.remove("active");

    if (!e.composedPath().includes(cartBtn) &&
        !e.composedPath().includes(cart))
        cart.classList.remove("active");

    if (!e.composedPath().includes(menuBtn) &&
        !e.composedPath().includes(navbar))
        navbar.classList.remove("active");

});

const addActive = (element) => {
    console.log(element);
   
    navbarList.childNodes.forEach((liElem) => {
        if (liElem.childNodes && liElem.childNodes.length > 0)
            liElem.childNodes[0].classList.remove("active");
        //console.log(liElem);
    });

    element.classList.add("active");
};


