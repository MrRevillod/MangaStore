const SearchDiv = document.getElementById("header-searchbar-div");
const HeadderSearchButton = document.getElementById("header-search-icon");
const SearchInput = document.getElementById("header-searchbar-input");


/* cambiar display  y activar animacion @keyframe al apretar HeaderSearchButton*/

HeadderSearchButton.addEventListener("click", (e) => {

    if (SearchDiv.style.display = "none") {
        SearchDiv.style.display = "block";

        SearchDiv.style.animation = "header-searchbar-div-block 0.5s ease-in-out";
    }
    else {
        SearchDiv.style.display = "none";
        SearchDiv.style.animation = "header-searchbar-div-none 0.5s ease-in-out";
    }
});


document.addEventListener("click", (e) => {

    if (e.target !== SearchDiv && e.target !== HeadderSearchButton && e.target !== SearchInput) {

        SearchDiv.style.animation = "header-searchbar-div-none 0.5s ease-in-out";
        SearchDiv.style.display = "none";
    }

});



