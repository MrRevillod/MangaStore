"use strict";

const CreateManga = async (data, tab, i, j) => {

    tab.innerHTML = "";

    for (i; i < j; i++) {
        const Mangas = data[i];

        let element = `   
        
            <div class="manga-card">

                <div class="manga-card__title">
                    <h3>${Mangas.Titulo}</h3>
                </div>

                <div class="img-box">
                    <img class="manga-card__image" src="${Mangas.Imagen}" alt="${Mangas.Titulo}">
                </div>

                <div class="manga-card__description">
                    <p>${Mangas.Estado}</p>
                    <h3 id="card-price">$ ${Mangas.Precio}</h3>
                </div>

            </div>    

        `;

        tab.innerHTML += element;
    };

};

const CreateTabsButtons = (data) => {

    const ul = document.getElementById("Tabs-Btns-ul");

    const JsonData = data.length;

    let cant = Math.trunc(JsonData / 9);
    const resto = JsonData % 9;

    if (resto > 0) {
        cant += 1;
    };

    for (let i = 0; i < cant; i++) {

        const btn = ` <li class="tab-button">${i + 1}</li>`;

        ul.innerHTML += btn;
    };

};


const RecognizeBtn = () => {
    const btns = document.getElementsByClassName("tab-button");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", () => {

            let index = i * 9;

            console.log(index, index + 9);

            CreateManga(data, Tab, index, index + 9);
        });

    };
};


const Tab = document.getElementById("Tab");

window.addEventListener("load", async () => {

    CreateManga(data, Tab, 0, 9);
    //CreateManga(data, Tab, 18, 27);
    CreateTabsButtons(data);
    RecognizeBtn();
});
