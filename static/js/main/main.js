//Highlights table rows
for(let element of document.getElementsByClassName("table-striped-line"))
{
    if(element.id != "header-nav-links-demo_version")
    {
        element.addEventListener("mouseover", (event) => {
            element.style["background-color"] = "rgb(200, 200, 200)";
        });
        element.addEventListener("mouseout", (event) => {
            element.removeAttribute("style");
        });
    }
};
