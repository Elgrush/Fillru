import { illuminateObject } from "./handlersCollection.js"

//Manages top bar color swaps
const mainNavigationLinks = document.getElementsByClassName(".header-nav-links");
for(let element of mainNavigationLinks)
{
    if(element.id != "header-nav-links-demo_version")
    {
        element.addEventListener("mouseover", (event) => {
            illuminateObject(element, "rgb(255, 255, 255)");
        });
        element.addEventListener("mouseout", (event) => {
            element.removeAttribute("style");
        });
    }
};

//Underlines telephone
{
    let nav_phone = document.getElementById("nav-phone");
    nav_phone.addEventListener("mouseover", (event) => {
        nav_phone.style["text-decoration"] = "underline";
    })
    nav_phone.addEventListener("mouseout", (event) => {
        nav_phone.removeAttribute("style");
    })
};

//Underlines icons
for(let element of document.getElementsByClassName("header-navbar-refcontainer-icon"))
{
    element.addEventListener("mouseover", (event) => {
        element.style["box-shadow"] = "inset 0 -1px 0 0";
    })
    element.addEventListener("mouseout", (event) => {
        element.removeAttribute("style");
    })
};

//Handles scrolldown
const elementsToFadeInUpOnScroll = document.querySelectorAll(".fade-in-up-on-scroll");
//Handles arrow animation
const elementsToFadeWhenZeroPosition = document.querySelectorAll(".fade-in-up-on-zero-position");
let previous_height = window.scrollY;
window.addEventListener("scroll", function(event) {
    elementsToFadeWhenZeroPosition.forEach(function(element) {
    if (window.scrollY <= 10) {
        element.classList.remove("fade-out-down");
        element.classList.add("fade-in-up");
    } else {
        element.classList.remove("fade-in-up");
        element.classList.add("fade-out-down");
    }
    });

    elementsToFadeInUpOnScroll.forEach(function(element) {
    if (window.scrollY > previous_height) {
        element.classList.remove("fade-out-down");
        element.classList.add("fade-in-up");
        previous_height = window.scrollY;
    } else {
        element.classList.remove("fade-in-up");
        element.classList.add("fade-out-down");
        previous_height = window.scrollY;
    }
    });
});

//Handles sidebar animations
const sideBarElements = document.querySelectorAll(".navigation-side-link-element-fading");
if (sideBarElements) {
    sideBarElements.forEach(

    (element) => {

        element.parentElement.addEventListener("mouseover", (event) => {

            element.parentElement.classList.remove("fade-in-horizontal-div");
            element.parentElement.classList.add("fade-out-horizontal-div");

            element.classList.remove("fade-in-left");
            element.classList.add("fade-out-left");
        });

        element.parentElement.addEventListener("mouseout", (event) => {

            element.parentElement.classList.remove("fade-out-horizontal-div");
            element.parentElement.classList.add("fade-in-horizontal-div");

            element.classList.remove("fade-out-left");
            element.classList.add("fade-in-left");
        });
    }
    
    );
};

//Makes scrolls not to trigger when using navigation
async function hideFading() {

    elementsToFadeInUpOnScroll.forEach((element) => {
        element.classList.remove("fade-out-down");
        element.classList.add("fade-in-up");
    })

}

for(let element of mainNavigationLinks)
{
    if(element.id != "header-nav-links-demo_version")
    {
        element.addEventListener("click", () => window.setTimeout(hideFading, 100));
    }
};
