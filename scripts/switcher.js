const switcher = document.getElementsByClassName("switcher");
const tag = document.getElementsByTagName("body")[0];


for (let i = 0; i < switcher.length; i++) {
    switcher[i].addEventListener("click", (event) => {

        tag.classList.toggle("dark-theme");
    });
}

