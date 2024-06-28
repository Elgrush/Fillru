import { illuminateObject } from "./handlersCollection.js"

//Manages top bar color swaps
for(let element of document.getElementsByClassName(".header-nav-links"))
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
let previous_height = window.scrollY;
if (elementsToFadeInUpOnScroll) {
window.addEventListener("scroll", function(event) {
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
};
