import { useState, useEffect } from "react";

const useAPIcall = (gifURL) => {

    const [ gifsReceived, setGifsReceived ] = useState([]);

    useEffect( async () => {
        const call = await fetch(gifURL);
        const jsonResponse = await call.json();
        setGifsReceived(jsonResponse.data);
    },[])

    return gifsReceived;
}

export default useAPIcall;