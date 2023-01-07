"use strict";

const GetData = async () => {
    const response = await fetch("./json/Mangas.json");
    const data = await response.json();
    return data;
};

/**
    @author: MrRevillod
    
    @description Crea contenido HTML estatico a partir de un array de objetos

    @param {Array} data  => información de los mangas en Mangas.js
    @param {HTMLBodyElement} tab => div donde se van a crear los mangas
    @param {number} i => indice inicial de la data que se va a crear
    @param {number} j => indice final de la data que se va a crear
*/

const CreateManga = async (data, tab, i, j) => {

    window.scrollTo(0, 0);
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


/**
    @author: MrRevillod
 
    @description Crear los botones de las paginas de los mangas.
 
        A traves de la length se obtiene la cantidad de Tabs necesarias
        Se divide en 9 y se calcula el resto, si el resto es mayor a 0 se le suma 1 a la cantidad de Tabs
        
        Se crea un boton por cada Tab a travez de un ciclo for

    @param {Array} data  => información de los mangas en Mangas.js
*/

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


/** 
    @author: MrRevillod
 
    @description Detecta el click en los botones de las paginas de los mangas
    
        Se obtiene un array con todos los botones y se recorre en espera de un
        evento click, al detectar el click se obtiene el indice del boton y se
        multiplica por 9 para obtener el indice inicial del rango a mostrar. 

        Se suma 9 al indice inicial para obtener el indice final del rango a mostrar.
    
    @param none => no recibe parametros
*/

const RecognizeTabButton = (data) => {

    const btns = document.getElementsByClassName("tab-button");

    for (let i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", () => {

            let min = i * 9;
            let max = min + 9;
            CreateManga(data, Tab, min, max);

            //=> console.log(index, index + 9); //=> Verificar que el indice este bien

        });

    };

};

//funcion que reconozca 

//=> Ejecución de funciones al cargar la pagina

const Tab = document.getElementById("Tab");


window.addEventListener("load", async () => {

    const data = await GetData();

    CreateManga(data, Tab, 0, 9);
    CreateTabsButtons(data);
    RecognizeTabButton(data);

});
