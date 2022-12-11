var cg_theme = document.getElementById("change_theme");
var bg = document.querySelector("body");

function change_color() {
    if(bg.classList == 0) {
        bg.classList.add("bg_black");
        cg_theme.style.color = "black";
        cg_theme.textContent = "TEMA CLARO";
    } else {
        cg_theme.style.color = "white";
        bg.classList.remove("bg_black");
        cg_theme.textContent = "TEMA ESCURO";
    }
}