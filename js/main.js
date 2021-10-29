const navBars = document.getElementById("nav-bars");
const navClose = document.getElementById("nav-close");
const navMobile = document.querySelector(".nav-mobile");
const navOverlay = document.querySelector(".nav-overlay");
const navDesktop = document.querySelector(".nav-pc");
const vietspace = document.querySelector(".brand span");
const brandLogo = document.querySelector(".brand img");

vietspace.classList.add("hidden");
brandLogo.classList.add("hidden");

navBars.addEventListener("click", function () {
    navMobile.classList.add("show");
    navMobile.classList.remove("hide");
    navOverlay.classList.add("fade-in");
});

navClose.addEventListener("click", function () {
    navMobile.classList.add("hide");
    navMobile.classList.remove("show");
    navOverlay.classList.remove("fade-in");
})

navOverlay.addEventListener("click", function () {
    navMobile.classList.remove("show");
    navMobile.classList.add("hide");
    navOverlay.classList.remove("fade-in");
})

window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
        navDesktop.classList.add("nav-background");
        vietspace.classList.add("fade-in");
        vietspace.classList.remove("hidden");
        brandLogo.classList.add("fade-in");
        brandLogo.classList.remove("hidden");
    } else {
        navDesktop.classList.remove("nav-background");
        vietspace.classList.remove("fade-in");
        vietspace.classList.add("hidden");
        brandLogo.classList.add("hidden");
        brandLogo.classList.remove("fade-in");
    }
})