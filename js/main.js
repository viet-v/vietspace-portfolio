const navBars = document.getElementById("nav-bars");
const navClose = document.getElementById("nav-close");
const navMobile = document.querySelector(".nav-mobile");
const navOverlay = document.querySelector(".nav-overlay");
const navDesktop = document.querySelector(".nav-pc");
const vietspace = document.querySelector(".brand span");
const brandLogo = document.querySelector(".brand img");
const stickyBarMobile = document.getElementById("sticky-bar-mobile");
const brandMobile = document.querySelector(".brand-mobile");
const hi = document.getElementById("hi");
const introduce = document.getElementById("introduce");

const hiValue = getComputedStyle(hi);
const hiLeftValue = parseInt(hiValue.left);

const introValue = getComputedStyle(introduce);
const introRightValue = parseInt(introValue.right);
console.log(hiLeftValue)
console.log(introRightValue)

vietspace.classList.add("hidden");
brandLogo.classList.add("hidden");
brandMobile.classList.add("hidden");

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
        stickyBarMobile.classList.add("nav-background");
        vietspace.classList.add("fade-in");
        vietspace.classList.remove("hidden");
        brandLogo.classList.add("fade-in");
        brandLogo.classList.remove("hidden");
        brandMobile.classList.add("fade-in");
        brandMobile.classList.remove("hidden");
    } else {
        navDesktop.classList.remove("nav-background");
        stickyBarMobile.classList.remove("nav-background");
        vietspace.classList.remove("fade-in");
        vietspace.classList.add("hidden");
        brandLogo.classList.add("hidden");
        brandLogo.classList.remove("fade-in");
        brandMobile.classList.add("hidden");
        brandMobile.classList.remove("fade-in");
    }
})

window.addEventListener("scroll", function () {
    // hi.style("left", Math.max(500 - 0.35*window.scrollY) + "px");
    const value = window.scrollY;
    hi.style.left = hiLeftValue - value + 'px';
    introduce.style.right = introRightValue - value + 'px';
})