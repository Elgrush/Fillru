import { illuminateObject } from "./handlersCollection.js"

//Manages color swaps
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
