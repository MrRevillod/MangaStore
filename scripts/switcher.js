const switcher = document.getElementsByClassName("switcher");
const tag = document.getElementsByTagName("body")[0];


for (let i = 0; i < switcher.length; i++) {
    switcher[i].addEventListener("click", (event) => {

        tag.classList.toggle("dark-theme");

        if (tag.classList.contains("dark-theme")) {
            document.getElementById("catalogo").style.color = "#F5F5F5";

        } else { document.getElementById("catalogo").style.color = "#050505" }
    });
}

