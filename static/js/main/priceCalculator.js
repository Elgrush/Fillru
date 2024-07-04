//Allows output to match input
const fbo_num = document.getElementById("calc-numout-fbo");
const fbs_num = document.getElementById("calc-numout-fbs");
const fbo_input = document.getElementById("total-pcs-calc-fbo");
const fbs_input = document.getElementById("total-pcs-calc-fbs");
const fbo_select = document.getElementById("calc-select-fbo");
const fbs_select = document.getElementById("calc-select-fbs");
const fbo_result = document.getElementById("calc-price-total-FBO");
const fbs_result = document.getElementById("calc-price-total-FBS");

function fbo_calc_calculation(){
    fbo_result.textContent = Number(fbo_select.value) * Number(fbo_num.value);
};
function fbs_calc_calculation(){
    fbs_result.textContent = Number(fbs_select.value) * Number(fbs_num.value);
};

fbo_input.addEventListener("input", function(){
    fbo_num.value = fbo_input.value;
    if(fbo_num.value == "")
        fbo_num.value = 0;
    fbo_calc_calculation();
});

fbs_input.addEventListener("input", function(){
    fbs_num.value = fbs_input.value;
    if(fbs_num.value == "")
        fbs_num.value = 0;
    fbs_calc_calculation();
});

//Actualy calculates output for seleсt elements
fbo_select.addEventListener("change", function() {fbo_calc_calculation();});
fbs_select.addEventListener("change", function() {fbs_calc_calculation();});

//Display calculator
const fbo_button = document.getElementById("nav-tabs-FBO");
const fbs_button = document.getElementById("nav-tabs-FBS");
const fbo_calculator = document.getElementById("fbo_calc");
const fbs_calculator = document.getElementById("fbs_calc");

function select_fbo_calculator()
{
    fbo_calculator.removeAttribute("style");
    fbs_calculator.style["display"] = "none";
};
function select_fbs_calculator()
{
    fbs_calculator.removeAttribute("style");
    fbo_calculator.style["display"] = "none";
};

fbo_button.addEventListener("click", function(){
    fbo_button.classList.add("calc-nav-active");
    fbs_button.classList.remove("calc-nav-active");
    select_fbo_calculator();
});
fbs_button.addEventListener("click", function(){
    fbs_button.classList.add("calc-nav-active");
    fbo_button.classList.remove("calc-nav-active");
    select_fbs_calculator();
});

//Gives some cognitive feedback
[fbo_button, fbs_button].forEach(element => {
    element.addEventListener("mouseover", function(){
        element.style["color"] = "rgb(133, 133, 133)";
    });
    element.addEventListener("mouseout", function(){
        element.removeAttribute("style");
    });
});
