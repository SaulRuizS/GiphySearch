import { useState } from 'react';

const useGlobalProps = () => {
    
    const [ inputText, setInputText ] = useState('');

    const [ queryText, setQueryText ] = useState('');

    const [ gifsReceived, setGifsReceived ] = useState([]);

    return {
        inputText,
        setInputText,

        queryText,
        setQueryText,

        gifsReceived,
        setGifsReceived,
    };
};

export default useGlobalProps;