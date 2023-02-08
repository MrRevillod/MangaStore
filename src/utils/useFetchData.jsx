import { useState, useEffect } from "react";

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