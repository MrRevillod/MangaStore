const switcher = document.getElementById("toggle");
const tag = document.getElementsByTagName("body")[0];

toggle.addEventListener("click", (event) => {
    tag.classList.toggle("dark-theme");

    if (tag.classList.contains("dark-theme")) {
        document.getElementById("catalogo").style.color = "#F5F5F5";

    } else { document.getElementById("catalogo").style.color = "#050505" }

});
