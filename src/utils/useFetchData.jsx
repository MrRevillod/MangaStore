import { useState, useEffect } from "react";

/** 
 * Función auxiliar para hacer fetching HTTP
 * @param {string} url : Direccion http
 * @param {string} method: Tipo de peticion (GET, POST, PUT, DELETE, PATCH)
 * @param {object} headers: Cabeceras de la petición
*/

export const useFetchData = (url, method, headers) => {

    const [data, setData] = useState([]);

    const FetchData = async () => {

        const response = await fetch(url, {
            method,
            headers,
        });

        const data = await response.json();

        setData(data);
    }

    useEffect(() => { FetchData() }, []);

    return data;

};