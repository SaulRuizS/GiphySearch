import { useEffect, useContext } from "react";
import AppContext from "@context/AppContext";

const useAPIcall = () => {

    const {
        queryText,
        gifsReceived,
        setGifsReceived,
    } = useContext(AppContext);

    const apiOptions = {
        api_key: 'Mo3yNbRox7H6GMPwmaXouUnqVZFq2vAy',
        q: `${queryText}`,
        limit: 20,
        offset: 0,
        rating: 'r',
        lang: 'en',
    }
    
    const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiOptions.api_key}&q=${apiOptions.q}&limit=${apiOptions.limit}&offset=${apiOptions.offset}&rating=${apiOptions.rating}&lang=${apiOptions.lang}`

    useEffect( () => {
        async function fetchData () {
            const call = await fetch(gifURL);
            const jsonResponse = await call.json();
            setGifsReceived(jsonResponse.data);
        }
        fetchData()
    },[queryText])

    return gifsReceived;
}

export default useAPIcall;