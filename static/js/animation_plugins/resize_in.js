const elementsToSizeIn = Array.prototype.slice.call(document.getElementsByClassName("resizeInElement"));

function triggerSizeInAnimation(element)
{
    element.classList.remove("resizeInElement");
    element.classList.add("resizeInElementClass");
}

function checkVisible(element)
{
  var rect = element.getBoundingClientRect();
  var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
  return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function CheckElementsVisibilityForSizeIn(elementsToSizeIn)
{
    for (let i = 0; i < elementsToSizeIn.length; ++i)
    {
        let element = elementsToSizeIn[i];
        if (checkVisible(element))
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
