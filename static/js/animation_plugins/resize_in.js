const elementsToSizeIn = Array.prototype.slice.call(document.getElementsByClassName("resizeInElement"));

function triggerSizeInAnimation(element)
{
    element.classList.remove("resizeInElement");
    element.classList.add("resizeInElementClass");
}

function CheckElementsVisibilityForSizeIn(elementsToSizeIn)
{
    for (let i = 0; i < elementsToSizeIn.length; ++i)
    {
        let element = elementsToSizeIn[i];
        let rect = element.getBoundingClientRect();
        if ((document.documentElement.clientHeight - rect.top) > rect.height/2)
        {
            triggerSizeInAnimation(element);
            elementsToSizeIn.splice(i, 1);
            --i;
        }
    }
}

// Checks page Y position
window.addEventListener("scroll", (event) => {
    CheckElementsVisibilityForSizeIn(elementsToSizeIn);
});

// For the loaded page
window.addEventListener("load", (event) => {
    CheckElementsVisibilityForSizeIn(elementsToSizeIn);
});
