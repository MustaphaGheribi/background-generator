const css = document.querySelector("h3");
const  color2 = document.getElementById("c2");
const  body = document.getElementById("body");
function setGradient(){
    body.style.background=
        "linear-gradient(to right, "
        + color1.value
        +","
        + color2.value
        +")";
    css.textContent = body.style.background + ";";

}
color1.addEventListener("input",setGradient);

color2.addEventListener("input", setGradient);

