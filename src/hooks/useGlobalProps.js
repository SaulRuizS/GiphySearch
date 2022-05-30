import { useState } from 'react';

const useGlobalProps = () => {
    
    const [ inputText, setInputText ] = useState('');

    const [ gifsReceived, setGifsReceived ] = useState([]);

    return {
        inputText,
        setInputText,

        gifsReceived,
        setGifsReceived,
    };
};

export default useGlobalProps;