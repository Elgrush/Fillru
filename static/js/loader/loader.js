//Hides the loader post-loading
window.addEventListener("load", function () {
    for(let element of document.getElementsByClassName("loader-box"))
    {
        element.style["display"] = "none";
    }
  }
  );
